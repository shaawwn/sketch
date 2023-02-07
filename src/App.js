// Imports
import style from './style.css'
import {useState, useEffect} from 'react';
// Component imports
import Banner from './components/banner';
import Canvas from './components/canvas';
import ColorPallete from './components/color_pallete'
import Brush from './components/brush';

function App() {
  const themes = {
    "normal": ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'black', 'white']
  }
  const [theme, setTheme] = useState(themes['normal'])
  const [brushColor, setBrushColor] = useState('black')
  const [brushPosition, setBrushPosition] = useState({x: 0, y: 0})
  const [drawMethod, setDrawMethod] = useState('click'); // can also set to 'hover'

  function changeBrushColor(newColor) {
    setBrushColor(newColor)
  }

  function attachMouseFollow() {
    document.addEventListener('mousemove', (event) => {
      setBrushPosition({x: event.clientX, y: event.clientY})
    })
  }

  useEffect(() => {
    attachMouseFollow()
  }, [])

  return (
    <div className="App">
      <Banner />
      <div className="sketch-container">
        <ColorPallete colors={theme} changeBrushColor={changeBrushColor}/>
        <Canvas colors={theme} brushColor={brushColor} drawMethod={drawMethod} changeDrawMethod={setDrawMethod}/>
      </div>
      <Brush color={brushColor} colors={theme} position={brushPosition} changeColor={setBrushColor}/>
    </div>
  );
}

export default App;
