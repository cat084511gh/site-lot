import Pack from "../common/Pack";
import React from "react-router-dom";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function PackShow() {
  const location = useLocation();
  const navigate = useNavigate();
  const packName = location.state?.packName;
  useEffect(() => {
    if (!location.state || !location.state.packName) {
      navigate("/", { replace: true });
    }
  }, [location.state, navigate]);
  const handleClick = () => {
    navigate(`/open`, { state: { packName: packName } });
  };
  return (
    <div className="flex">
      <div className="flex w-1/2 justify-center items-center min-h-screen">
        <Pack name="sample" />
      </div>
      <div className="w-1/2">
        <div>パックの説明的なの</div>
        <div onClick={handleClick}>開封する</div>
      </div>
    </div>
  );
}

export default PackShow;
