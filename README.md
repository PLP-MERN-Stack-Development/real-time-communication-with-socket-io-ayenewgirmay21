# Real-Time Chat Application 🟢

Welcome to the **Real-Time Chat App**, a full-stack MERN application with **real-time messaging** powered by **Socket.IO**. Users can register, log in, and chat instantly with other users in a secure environment. The frontend is deployed on **Vercel**, and the backend is hosted on **Render**.

## 🌐 Live Demo

Check out the app live: [https://real-time-chat-app-fpk1.onrender.com/](https://real-time-chat-app-fpk1.onrender.com/)

---

## 🔹 Features

- **Real-time messaging** with Socket.IO
- User **authentication** with JWT and Passport
- **Secure cookie handling** for sessions
- Responsive **frontend** with React & Vite
- RESTful **API endpoints** for users, messages, and chat rooms
- Error handling and health-check endpoints
- **CORS enabled** for frontend-backend communication

---

## 🛠 Technology Stack

**Frontend:**
- React 18
- Vite
- Axios
- Tailwind CSS (optional styling)

**Backend:**
- Node.js & Express
- TypeScript
- MongoDB (Atlas)
- Socket.IO
- Passport & JWT
- Render for deployment

---

## ⚙️ Installation (Local Dev)

Clone the repository:

```bash


Backend Setup
cd backend
npm install
cp .env.example .env   # configure your environment variables
npm run dev

Frontend Setup
cd ../client
npm install
cp .env.example .env   # configure your environment variables
npm run dev


Open your browser at http://localhost:5173
 to see the app.

🗂 Project Structure
/backend     # Node.js + Express backend
/client      # React frontend
/src
  /controllers
  /middlewares
  /models
  /routes
  /lib

📦 Deployment

Backend: Render
Frontend: Vercel

Make sure to set the environment variables in both Render and Vercel dashboards for smooth operation.

📌 Environment Variables

Backend (.env):

NODE_ENV=production
PORT=8000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=15m
FRONTEND_ORIGIN=https://real-time-chat-app-umber-gamma.vercel.app
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret


Frontend (.env):

VITE_BACKEND_URL=https://your-backend-url.onrender.com

💻 How to Use

Register a new account.

Login with your credentials.

Join chat rooms or message users in real-time.

Logout when done.

🚀 Future Enhancements

Typing indicators

Read receipts

File attachments

Group chat support

Dark mode toggle

🔗 Live App

Real-Time Chat App
git clone https://github.com/PLP-MERN-Stack-Development/real-time-communication-with-socket-io-ayenewgirmay21.git
cd real-time-communication-with-socket-io-ayenewgirmay21
