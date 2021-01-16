import React from "react";
import { MdExposurePlus1 } from "react-icons/md";

const Skill = (props) => {
  let stars = [];
  for (let i = 0; i < props.stars; i++) {
    stars.push(<i className="icon star is-transparent is-small" />);
  }
  return (
    <div className="stats-skill">
      <div className="plusOne">
        <MdExposurePlus1 />
      </div>
      {props.children}
    </div>
  );
};

export default Skill;
