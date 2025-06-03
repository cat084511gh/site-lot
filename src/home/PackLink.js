import Pack from "./Pack";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

const PackLink = ({ to }) => {
  return (
    <Link to={to}>
      <Pack name={to} />
    </Link>
  );
};

export default PackLink;
