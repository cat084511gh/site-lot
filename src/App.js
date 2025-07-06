import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./home/Home";
import PackShow from "./packShow/packShow";
import PackOpen from "./packOpen/packOpen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />,
      <Route path="/pack" element={<PackShow />} />
      <Route path="/open" element={<PackOpen />} />
    </Routes>
  );
}
export default App;
