# OsteoGuard-AI

OsteoGuard-AI is an intelligent, full-stack application designed to analyze medical images and diagnose bone health conditions. Leveraging a deep learning computer vision model, the system classifies images into three distinct categories: **Normal**, **Osteopenia**, and **Osteoporosis**.

## 🏗 Architecture overview

This project is divided into three main microservices:

1. **Frontend (`/frontend`)**: A modern, responsive user interface built with React and Vite.
2. **Backend (`/backend`)**: A secure and robust Node.js/Express API gateway that handles client requests and orchestrates communication.
3. **AI Service (`/ai_service`)**: A fast, dedicated Python microservice powered by FastAPI and PyTorch that runs inference on a fine-tuned ResNet50 model.

---

## ✨ Features

- **AI-Powered Diagnostics**: Utilizes a fine-tuned ResNet50 deep learning model for accurate medical image classification.
- **Modern User Interface**: Built with React 19, Tailwind CSS v4, Framer Motion for smooth animations, and Recharts for data visualization.
- **Secure Backend System**: Express API secured with Helmet, Rate Limiting, and CORS, featuring comprehensive request logging via Winston and Morgan.
- **PDF Generation**: Capable of generating downloadable diagnostic reports on the client side using `jspdf`.
- **Microservices Architecture**: Clean separation of concerns between the UI, business logic, and the heavy machine-learning workloads.

---

## 🛠 Tech Stack

### Frontend
- **Framework:** React 19, Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Data Visualization:** Recharts
- **Routing:** React Router DOM

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Middleware/Security:** Helmet, CORS, Express Rate Limit, Compression
- **Logging:** Morgan, Winston
- **File Handling:** Multer, Form-data

### AI Service
- **Framework:** FastAPI, Uvicorn
- **Machine Learning:** PyTorch, Torchvision
- **Model:** ResNet50 (Fine-tuned for 3-class classification)
- **Image Processing:** Pillow (PIL)

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Python](https://www.python.org/) (3.9+ recommended)
- `npm` or `yarn`

### 1. Starting the AI Service
The AI service handles the heavy lifting of image classification. Ensure you have your trained weights (`best_model_finetuned.pth`) placed in the `AI Model/` directory.

```bash
cd ai_service

# Create a virtual environment (optional but recommended)
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`

# Install required packages (assuming a requirements.txt exists)
pip install fastapi uvicorn torch torchvision pillow python-multipart

# Start the server
python main.py
# The AI service will run on http://localhost:8000
