import { useState } from "react";
import './App.css';

function App() {
  const [colors, setColors] = useState("#000");

  const rgbColors = () =>  Math.floor(Math.random() * 256);
  
const rgbToHex = (r, g, b) => 
  '#' + 
    [r, g, b]
      .map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  })
  .join('');

  const handleColors = () => {
    const colors = {
      r:rgbColors(),
      g:rgbColors(),
      b:rgbColors(),
    };
    setColors(rgbToHex(colors.r, colors.g, colors.b));
  };





  return (
    <div style={{backgroundColor: colors }} className="App">

        <button style={{ colors: colors}} onClick={handleColors}>{colors }</button>

    </div>
  );
}

export default App;
