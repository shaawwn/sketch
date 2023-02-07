import {useState, useEffect} from 'react';

import Pixel from './pixel';

function Canvas(props) {

    const [canvasSize, setCanvaseSize] = useState(800) // 300 pixels as a default
    const [pixels, setPixels] = useState([])
    const [theme, setTheme] = useState(props.colors)

    // DrawStyle is the type of interaction between the mouse and the canvas.
        // 'hover' will change color of pixels on mouse over
        // 'click' will change color on mouse click
        // default is hover
    const [drawMethod, setDrawMethod] = useState(props.drawMethod)
    const [drag, setDrag] = useState(false) // if true, user can 'click and drag' color

    function addPixels() {
        // add initial pixels to the canvase, default white background color.
        let pixels = []
        for(let i = 0; i < canvasSize * 2; i++) {
            pixels.push(<Pixel key={i} color={''} brushColor={props.brushColor} canvas={canvasSize} drawMethod={drawMethod} changeColor={colorPixel}/>)
        }
        setPixels(pixels)
    }

    function colorPixel() {
        // change the color of a pixel 
        return props.brushColor
    }

    function changeDrawMethod() {
        // TODO add a button/menu that changes the drawing method to the canvase
        if(drawMethod === 'hover') {
            console.log("Hover to click")
            props.changeDrawMethod('click')
        } else if(drawMethod === 'click') {
            console.log("Click to hover")
            props.changeDrawMethod('hover')
        }
    }

    useEffect(() => {

    }, [props.brushColor])

    useEffect(() => {
        if(pixels.length === 0) {
            addPixels()
        }
    }, [pixels])

    return(
        <div className="canvas">
            {pixels}
        </div>
    )
}

export default Canvas