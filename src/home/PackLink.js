import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Pack from "../common/Pack";

const PackLink = ({ name }) => {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setAnimate(true);
    setTimeout(() => {
      navigate(`/pack`, { state: { packName: name } });
    }, 500);
  };

  return (
    <div onClick={handleClick} className={`${animate ? "animate-pop" : ""}`}>
      <Pack name={name} />
    </div>
  );
};

export default PackLink;
