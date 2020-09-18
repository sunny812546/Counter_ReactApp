import React from "react";

const Button = ({ title = "Nothing", onClick }) => {
  return <button onClick={onClick}>{title}</button>;
};

export default Button;
