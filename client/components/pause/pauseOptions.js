import React from "react";

const Modal = (props) => {
  return (
    <a
      onMouseDown={props.downClick}
      href={props.to}
      onTouchEnd={props.touch}
      onClick={props.click}
      className="pauseText"
      onMouseEnter={() => props.hover(props.value)}
    >
      <input
        readOnly
        type="radio"
        className="radio"
        name="pause"
        value={props.value}
        checked={props.checked}
      ></input>
      <span>{props.value}</span>
    </a>
  );
};
export default Modal;
