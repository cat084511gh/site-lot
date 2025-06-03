import React from "react";
import "./PackWrapper.css";

const PackWrapper = ({ children }) => {
  return <div className="pack-wrapper border">{children}</div>;
};

export default PackWrapper;
