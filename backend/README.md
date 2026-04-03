# OsteoGuard-AI Backend

This is the complete, production-ready Node.js / Express backend for OsteoGuard-AI.

## Features

- **Express** - The minimal, flexible Node.js web application framework
- **CORS** - Enables cross-origin resource sharing
- **Dotenv** - Loads environment variables from a `.env` file
- **Helmet** - Secures the Express app by setting HTTP response headers
- **Morgan** - HTTP request logger middleware
- **Winston** - Universal logging library
- **Compression** - Node.js compression middleware
- **Express Rate Limit** - Basic rate-limiting middleware to prevent brute-force attacks
- **Error Handling** - Centralized error catching and handling

## Setup

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development

Run the server in development mode with nodemon:
```bash
npm run dev
```

## Production

Start the server in production mode:
```bash
npm start
```

## API Routes

- `GET /api/v1/health` - Check health status of the API.
