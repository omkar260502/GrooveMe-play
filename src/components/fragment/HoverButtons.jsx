import '../assets/scss/HoverButton.scss';
import React from "react";
import { Link } from "react-router-dom";

const HoverButton = ({ Icon, variant, text, to }) => {
//   const buttonVariant = variant || "contained";
  return (
    <Link to={to}>
      <Icon />
      <span>{text}</span>
    </Link>
  );
};

export default HoverButton;
