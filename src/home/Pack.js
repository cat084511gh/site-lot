import React from "react";
import "./Pack.css";

const Pack = ({ name }) => {
  return (
    <div className="pack">
      <h2>Pack {name}</h2>
      <p>これは Pack {name} の内容です。</p>
    </div>
  );
};

export default Pack;
