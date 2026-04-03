from fastapi import FastAPI, UploadFile, File, HTTPException
import torch
import torch.nn as nn
from torchvision import models, transforms
from PIL import Image
import io
import os

app = FastAPI(title="OsteoGuard AI Model API")

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# Load model architecture
NUM_CLASSES = 3
model = models.resnet50(weights=None)
num_ftrs = model.fc.in_features
model.fc = nn.Linear(num_ftrs, NUM_CLASSES)
model = model.to(device)

# Load weights
MODEL_PATH = os.path.join(os.path.dirname(__file__), "../AI Model/best_model_finetuned.pth")
if os.path.exists(MODEL_PATH):
    model.load_state_dict(torch.load(MODEL_PATH, map_location=device))
    print(f"Successfully loaded model from {MODEL_PATH}")
else:
    print(f"Warning: Model file not found at {MODEL_PATH}. Prediction will fail.")

model.eval()

# Transforms
IMG_SIZE = 224
val_transforms = transforms.Compose([
    transforms.Resize((IMG_SIZE, IMG_SIZE)),
    transforms.ToTensor(),
    transforms.Normalize(
        mean=[0.485, 0.456, 0.406],
        std=[0.229, 0.224, 0.225]
    )
])

class_names = ['Normal', 'Osteopenia', 'Osteoporosis']

@app.post("/predict")
async def predict_image(file: UploadFile = File(...)):
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="Must be an image file")

    try:
        # Read image
        contents = await file.read()
        image = Image.open(io.BytesIO(contents)).convert("RGB")
        
        # Transform and predict
        tensor_image = val_transforms(image).unsqueeze(0).to(device)
        with torch.no_grad():
            output = model(tensor_image)
            _, pred = torch.max(output, 1)
            
        diagnosis = class_names[pred.item()]
        
        return {
            "status": "success",
            "filename": file.filename,
            "diagnosis": diagnosis
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/health")
def health_check():
    return {"status": "up", "device": str(device)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
