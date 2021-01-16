import * as React from "react";

type Props = {};
const Five = (props: Props) => {
  return (
    <div className="stats-howMany">
      <i className="icon star is-medium stats-howManyStars"></i>
      <hr className="stats-hr" />
      <h1 className="stats-howManyNum">5</h1>
    </div>
  );
};

export default Five;
