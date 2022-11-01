import { Button } from "antd";
import { Route, Routes } from "react-router-dom";
import AppRoutes from "./routes";
import "./styles/App.less";
import { AppRootContextProvider } from "./utils/AppRootContext";

function App() {
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
