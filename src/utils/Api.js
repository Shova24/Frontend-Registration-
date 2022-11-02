import axios from "axios";

export const AuthAPI = axios.create({
  baseURL: process.env.REACT_APP_BaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
console.log("====================================");
console.log(process.env.REACT_APP_BaseUrl);
console.log("====================================");
export const CommonAPI = axios.create({
  baseURL: process.env.REACT_APP_BaseUrl,
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
});
