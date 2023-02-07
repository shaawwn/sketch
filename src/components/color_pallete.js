import {useState, useEffect} from 'react';
import Color from './color'
function ColorPallete(props) {

    const [colors, setColors] = useState(props.colors)

    useEffect(() => {

    }, [])

    return(
        <div className="color-pallete">
            <h2>Pallete</h2>
            <div className="colors-container">
                {colors.map((color) => 
                    <Color key={color} color={color} onClick={props.changeBrushColor}/>
                )}
            </div>
        </div>
    )
}

export default ColorPallete