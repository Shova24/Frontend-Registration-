import { createContext } from "react";

const AppRootContext = createContext();

const AppRootContextProvider = ({ children }) => {
  return <AppRootContext.Provider values={{}}>{children}</AppRootContext.Provider>;
};

export { AppRootContextProvider, AppRootContext };
