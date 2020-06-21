import React from "react";

interface Props {
  colorName: string;
  colorAmount: number;
  onColorAmountUpdated: (amount: number) => void;
}

export const ColorSlider: React.FC<Props> = (props: Props) => {
    return (
      <>
        <div>
            {props.colorName}:
          <input
            type="range"
            min="0"
            max="255"
            value={props.colorAmount}
            onChange={(event) =>
              props.onColorAmountUpdated(+event.target.value)
            }
          />
        </div></>
    );
  };
  