import { getEnv } from "../utils/get-env";

export const Env = {
  NODE_ENV: getEnv("NODE_ENV", "production"),
  PORT: getEnv("PORT", "8000"),
  MONGO_URI: getEnv("MONGO_URI", "mongodb+srv://realtime_chatapp:Ayenew1234@cluster0.vp6ndrl.mongodb.net/?appName=Cluster0"),
  JWT_SECRET: getEnv("JWT_SECRET", "secret_jwt"),
  JWT_EXPIRES_IN: getEnv("JWT_EXPIRES_IN", "15m"),
  FRONTEND_ORIGIN: getEnv("FRONTEND_ORIGIN", "https://real-time-chat-app-umber-gamma.vercel.app"),

  // Cloudinary
  CLOUDINARY_CLOUD_NAME: getEnv("CLOUDINARY_CLOUD_NAME", "dqw5oecv1"),
  CLOUDINARY_API_KEY: getEnv("CLOUDINARY_API_KEY", "619626756592271"),
  CLOUDINARY_API_SECRET: getEnv("CLOUDINARY_API_SECRET", "bCDgBvpJlsMDcIQjBAjFRsQH0Rs"),
} as const;
