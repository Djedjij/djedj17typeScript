import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link className="buttonForm" to={"/form"}>
      FORM
    </Link>
  );
};

export default Button;
