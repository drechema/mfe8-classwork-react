import React from "react";
import { Color } from "./model";

interface Props {
  color: Color;
}

export const ColorBrowser: React.FC<Props> = (props: Props) => {
  // Color Rectangle
  const divStyle: React.CSSProperties = {
    width: "11rem",
    height: "7rem",
    backgroundColor: `rgb(${props.color.red},
                          ${props.color.green}, 
                          ${props.color.blue})`
  };

  return <div style={divStyle} />;
};
