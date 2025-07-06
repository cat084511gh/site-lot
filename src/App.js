import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./home/Home";
import PackShow from "./packShow/packShow";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />,
      <Route path="/pack/*" element={<PackShow />} />
    </Routes>
  );
}
export default App;
