import { useState } from 'react';
import { ColorBox } from "./ColorBox";


export function AddColor() {
  const [color, setColor] = useState("orange");
  const styles = {
    background: color,
  };

  const [colorList, setColorList] = useState(["red", "yellow", "orangered", "blue"]);
  return (

    <div>
      <input style={styles} onChange={(event) => setColor(event.target.value)} value={color} placeholder='enter a color'></input>
      <button onClick={() => setColorList([...colorList, color])}>Add color</button>
      {colorList.map((clr) => <ColorBox color={clr} />)}
    </div>
  );
}
