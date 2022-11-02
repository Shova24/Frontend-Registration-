import { Button } from "antd";
import { Route, Routes } from "react-router-dom";
import AppRoutes from "./routes";
import "./styles/App.less";
import { AppRootContextProvider } from "./utils/AppRootContext";

function App() {
  // console.log("NODE_ENV:", process.env.development.NODE_ENV);
  // console.log("REACT_APP_STAGE:", process.env.REACT_APP_STAGE);
  return (
    <>
      <AppRootContextProvider>
        <Routes>
          <Route path="*" element={<AppRoutes />}></Route>
        </Routes>
      </AppRootContextProvider>

      {/* <div className="App">
        <Button type="primary">Button</Button>
      </div> */}
    </>
  );
}

export default App;
