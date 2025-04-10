import React from "react";

function Button({ handleClick, name, value, className, calc }) {
  return (
    <>
      <button className={className} onClick={handleClick} name={name}>
        {value}
      </button>
    </>
  );
}

export default Button;