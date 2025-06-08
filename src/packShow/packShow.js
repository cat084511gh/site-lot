import Pack from "../common/Pack";
import React from "react-router-dom";
function PackShow() {
  return (
    <div className="flex">
      <div className="flex w-1/2 justify-center items-center min-h-screen">
        <Pack name="sample" />
      </div>
      <div className="w-1/2"></div>
    </div>
  );
}

export default PackShow;
