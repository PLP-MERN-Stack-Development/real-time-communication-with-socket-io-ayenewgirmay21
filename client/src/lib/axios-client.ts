// client/src/lib/axios-client.ts
import axios from "axios";

export const API = axios.create({
  baseURL:
    import.meta.env.MODE === "production"
      ? `${import.meta.env.VITE_API_URL}/api` // <-- must be defined
      : "/api",
  withCredentials: true,
});
