import * as React from "react";

export const Header: React.FC<{}> = (props) => {
  return <h1 className="header">{props.children}</h1>;
};
