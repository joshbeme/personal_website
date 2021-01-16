import React from "react";
import Stat from "./infoStats";

const statsContainer = (props) => {
  return (
    <div className="personalInfo-statsContainer ">
      <Stat header="Name">Joshua Owens</Stat>
      <Stat header="Location">Las Vegas</Stat>
      <Stat header="School">Cerritos College</Stat>
      <Stat header="Age">25</Stat>
      <Stat header="Degree">Computer Science</Stat>
      <Stat header="Focus">JavaScript Fullstack</Stat>
      <Stat header="Experience">3 Years</Stat>
    </div>
  );
};

export default statsContainer;
