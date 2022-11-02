import { createContext, useState } from "react";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthAPI } from "./Api";

const AppRootContext = createContext();

const AppRootContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);

  const Notification = (text) => {
    notification.open({
      message: text,
    });
  };

  const createNewUser = async (values) => {
    try {
      await AuthAPI.post("/users/register", values);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const getUsers = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/api/users/get-user", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      // const users = await response.json();
      console.log(data);
      console.log("Token : ", localStorage.getItem("token"));
      setUser(data);
    } catch (error) {
      // console.log("a", error);
      if (error?.response?.data?.message === "Session Expired") {
        navigate("/login");
      }
    }
  };

  const loginApi = async (values) => {
    try {
      const response = await AuthAPI.post("/users/login", values);
      if (response.data === "User not found") {
        Notification("User not found");
        return;
      }
      if (response.data === "Password not matched!!!") {
        Notification("Password not matched!!!");
        return;
      }
      const token = response.data;
      localStorage.setItem("token", token);
      navigate("/");
      return;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppRootContext.Provider
      value={{
        user,
        getUsers,
        Notification,
        loginApi,
        createNewUser,
      }}>
      {children}
    </AppRootContext.Provider>
  );
};

export { AppRootContextProvider, AppRootContext };
