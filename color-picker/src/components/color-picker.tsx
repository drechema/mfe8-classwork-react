import React from "react";
import { Color } from "./model";
import { ColorBrowser } from "./color-browser";
import { ColorEditor } from "./color-editor";

interface Props {
  color: Color;
  onColorUpdated: (color: Color) => void;
}

export const ColorPicker: React.FC<Props> = (props: Props) => {

  return (
    <>
      <ColorBrowser color={props.color} />
      <ColorEditor color={props.color} onColorUpdated={color => props.onColorUpdated(color)} />
    </>
  );
};
