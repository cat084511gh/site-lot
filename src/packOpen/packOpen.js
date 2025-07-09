import React from "react-router-dom";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function PackShow() {
  const location = useLocation();
  const packName = location.state?.packName;
  const navigate = useNavigate();
  useEffect(() => {
    if (!location.state || !location.state.packName) {
      navigate("/", { replace: true });
    }
  }, [location.state, navigate]);
  return <div>{packName}</div>;
}

export default PackShow;
