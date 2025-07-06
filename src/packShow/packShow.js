import Pack from "../common/Pack";
import React from "react-router-dom";

function PackShow() {
  return (
    <div className="flex">
      <div className="flex w-1/2 justify-center items-center min-h-screen">
        <Pack name="sample" />
      </div>
      <div className="w-1/2">
        <div>パックの説明的なの</div>
        <div onClick="">開封する</div>
      </div>
    </div>
  );
}

export default PackShow;
