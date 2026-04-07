# Vercel Deployment Guide

## 🚀 Deploying OsteoGuard-AI to Vercel

### Prerequisites
- Vercel account (sign up at [vercel.com](https://vercel.com))
- GitHub repository connected to Vercel

### Step 1: Connect Repository to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New..." → "Project"
3. Import your GitHub repository: `mehulb-01/finyp`
4. Vercel will automatically detect the project settings

### Step 2: Configure Environment Variables
In the Vercel dashboard, add these environment variables:
```
NODE_ENV=production
CORS_ORIGIN=*
```

### Step 3: Deploy
1. Click "Deploy" to start the deployment process
2. Vercel will automatically:
   - Build the frontend using Vite
   - Deploy the API as serverless functions
   - Configure routing between frontend and backend

### Step 4: Post-Deployment Setup
After deployment, you'll need to:

1. **Update AI Service URL**: If your AI service is running on a separate server, update the `AI_SERVICE_URL` environment variable in Vercel.

2. **Configure CORS**: Update `CORS_ORIGIN` to your deployed frontend URL for security.

3. **Test the Application**: Visit your deployed Vercel URL and test all features.

### 📁 Project Structure for Vercel
```
├── api/                    # Serverless functions
│   └── index.js           # Main API handler
├── frontend/              # React frontend
│   ├── dist/             # Build output
│   └── package.json      # Frontend dependencies
├── backend/              # Original backend (kept for reference)
├── vercel.json          # Vercel configuration
└── package.json         # Root package.json
```

### 🔧 Configuration Details

- **Frontend**: Built with Vite and deployed as static files
- **Backend**: Converted to serverless functions in `/api` directory
- **Routing**: All `/api/*` requests go to serverless functions, everything else goes to frontend
- **Build Process**: Vercel automatically builds the frontend and deploys API functions

### 🌍 Accessing Your Deployed App
Once deployed, your app will be available at:
- Frontend: `https://your-app-name.vercel.app`
- API: `https://your-app-name.vercel.app/api/v1/*`

### 🐛 Troubleshooting

**Build Failures:**
- Check that all dependencies are in `package.json`
- Ensure build scripts are correctly configured

**API Issues:**
- Verify environment variables are set correctly
- Check serverless function logs in Vercel dashboard

**CORS Issues:**
- Update `CORS_ORIGIN` to your specific domain
- Ensure API routes are properly configured

### 📝 Notes
- The AI service (PyTorch model) may need to be deployed separately due to size constraints
- Large files like `best_model_finetuned.pth` should be hosted on CDN or cloud storage
- Consider using Vercel's Edge Functions for better performance if needed
