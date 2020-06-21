import React from "react";
import { Color } from "./model";
import { ColorSlider } from "./color-slider";

interface Props {
  color: Color;
  onColorUpdated: (color: Color) => void;
}

export const ColorEditor: React.FC<Props> = (props: Props) => {
  return (
    <>
      <ColorSlider colorName="Rojo" colorAmount={props.color.red} 
                   onColorAmountUpdated={amount => props.onColorUpdated({...props.color, red: amount})} />
      <ColorSlider colorName="Verde" colorAmount={props.color.green} 
                   onColorAmountUpdated={amount => props.onColorUpdated({...props.color, green: amount})} />
      <ColorSlider colorName="Azul" colorAmount={props.color.blue} 
                   onColorAmountUpdated={amount => props.onColorUpdated({...props.color, blue: amount})} />                                      
    </>
  );
};
