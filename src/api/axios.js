import axios from "axios";

export const API = axios.create({
  baseURL: "http://15.164.234.61:8080/",
  headers: {
    "Content-Type": "application/json"
  }
});
