# AI Code Review Application

A full-stack application that provides AI-powered code review functionality with a modern React frontend and Node.js backend.

## Features

- 🤖 AI-powered code review
- 🌓 Dark/Light theme support
- 📝 Real-time code editing
- 🔍 Syntax highlighting
- 🔄 Auto-language detection
- 🚀 Fast and responsive UI

## Tech Stack

### Frontend
- React (Vite)
- TailwindCSS
- Axios
- React Router DOM
- React Markdown
- Syntax Highlighter
- Framer Motion
- Google OAuth Integration

### Backend
- Node.js
- Express
- MongoDB
- Google Generative AI
- JWT Authentication
- Bcrypt.js

## Prerequisites

- Node.js (v16 or higher)
- MongoDB
- Google Cloud Platform account (for AI and OAuth)

## Environment Variables

### Frontend (.env)
```plaintext
VITE_AI_CODE_REVIEWER=http://localhost:5000/ai/get-review
VITE_AUTH_API=http://localhost:5000/api/auth
VITE_GOOGLE_CLIENT_ID=your_google_client_id