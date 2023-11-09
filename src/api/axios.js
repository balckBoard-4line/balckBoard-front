import axios from "axios";

export const API = axios.create({
  baseURL: "https://3.34.99.5:8080",
  headers: {
    "Content-Type": "application/json"
  }
});
