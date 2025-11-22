import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import passport from "passport";
import { Env } from "./config/env.config";
import { asyncHandler } from "./middlewares/asyncHandler.middleware";
import { HTTPSTATUS } from "./config/http.config";
import { errorHandler } from "./middlewares/errorHandler.middleware";
import connectDB from "./config/database.config";
import { initializeSocket } from "./lib/socket";
import routes from "./routes";
import "./config/passport.config";

const app = express();
const server = http.createServer(app);

// Initialize Socket.IO
initializeSocket(server);

// Middleware
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// CORS: allow frontend hosted on Vercel
app.use(
  cors({
    origin: [
      Env.FRONTEND_ORIGIN,          // Production frontend
      "http://localhost:5173"       // Local dev frontend
    ],
    credentials: true,
  })
);

// Passport initialization
app.use(passport.initialize());

// Health check endpoint
app.get(
  "/health",
  asyncHandler(async (req, res) => {
    res.status(HTTPSTATUS.OK).json({
      message: "Server is healthy",
      status: "OK",
    });
  })
);

// API routes
app.use("/api", routes);

// ❌ Removed serving frontend static files (frontend is on Vercel)

// Error handling
app.use(errorHandler);

// Start server
server.listen(Env.PORT, async () => {
  await connectDB();
  console.log(`Server running on port ${Env.PORT} in ${Env.NODE_ENV} mode`);
});
