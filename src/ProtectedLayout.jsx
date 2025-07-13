import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedLayout = () => {
  const [loggedIn, setLoggedIn] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const loggedInFlag = localStorage.getItem("loggedIn") !== null;
    setLoggedIn(loggedInFlag);
  }, []);

  if (loggedIn === null) {
    return <div>Loading...</div>; // ローディング表示
  }

  // ログインしていなければログインページへリダイレクト
  if (!loggedIn) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // ログイン済みならOutletで子ルートを表示
  return <Outlet />;
};

export default ProtectedLayout;
