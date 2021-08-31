import React from "react";
import "./Style1.css";
function Test() {
  const handleClick = () => {
    alert("Clicked!!");
  };

  return (
    <div>
      <div class="chip">
        Toán
        <span class="closebtn" onClick={handleClick}>
          &times;
        </span>
      </div>
    </div>
  );
}

export default Test;
