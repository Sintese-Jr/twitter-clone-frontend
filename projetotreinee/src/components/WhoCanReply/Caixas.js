import "../../styles/caixas.css";
import React from "react";

export default function Caixas({ handleClick, option }) {
  function changeOption() {
    handleClick(option);
  }

  return (
    <div className="Caixas" onClick={changeOption}>
      <div className="Everyone">
        <i class={"fa-solid " + option.icon}></i>
        {option.label}
      </div>
    </div>
  );

}

