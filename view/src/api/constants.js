import axios from "axios";

export const BASE_INSTANCE = axios.create({
  baseURL: "/api",
  timeout: 25000
});
