import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "./urlList.json";

const Pack = ({ name }) => {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setAnimate(true);
    setTimeout(() => {
      navigate(`/${name}`); // ✅ 遷移先を適宜変更
    }, 500); // アニメーションと同じ500ms後
  };

  return (
    <div
      onClick={handleClick}
      className={`w-[300px] h-[500px] bg-blue-500 rounded-xl shadow-lg cursor-pointer ${
        animate ? "animate-pop" : ""
      }`}
    >
      <h2>Pack {name}</h2>
      <p>これは Pack {name} の内容です。</p>
      <h2>{data.kato}</h2>
    </div>
  );
};

export default Pack;
