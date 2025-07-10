import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProtectedLayout from "./ProtectedLayout";
import Login from "./Login";
import Home from "./home/Home";
import PackShow from "./packShow/packShow";
import PackOpen from "./packOpen/packOpen";
import UploadForm from "./uploadForm/uploadForm";
import React, { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Routes>
      <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
      <Route element={<ProtectedLayout />}>
        <Route path="/" element={<Home />} />,
        <Route path="/pack" element={<PackShow />} />
        <Route path="/open" element={<PackOpen />} />
        <Route path="/upload" element={<UploadForm />} />
      </Route>
    </Routes>
  );
}
export default App;
