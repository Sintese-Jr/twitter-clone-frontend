import "../../styles/caixas.css";
import React from "react";

export default function Caixas({ handleClick, option }) {
  return (
    <div className="Caixas" onClick={handleClick(option)}>
      <div className="Everyone">
        <i class={"fa-solid " + option.icon}></i>
        {option.label}
      </div>
    </div>
  );
}
