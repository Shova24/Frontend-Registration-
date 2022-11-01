import { Button } from "antd";
import { Route, Routes } from "react-router-dom";
import AppRoutes from "./routes";
import "./styles/App.less";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<AppRoutes />}></Route>
      </Routes>
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
    </>
  );
}

export default App;
