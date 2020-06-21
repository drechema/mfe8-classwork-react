import * as React from "react";
import { Color, ColorPicker } from "./components";

export default function App() {
  const [chosenColor, setChosenColor] = React.useState<Color>({
    red: 10,
    green: 20,
    blue: 120
  });

  return (
    <div>
      <ColorPicker color={chosenColor} onColorUpdated={color => setChosenColor(color)}
      />
    </div>
  );
}