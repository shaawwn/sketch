import {useState, useEffect} from 'react';

function Pixel(props) {

    const [size, setSize] = useState()
    const [color, setColor] = useState(props.color)
    const [brushColor, setBrushColor] = useState(props.brushColor)
    const [drawMethod, setDrawMethod] = useState(props.drawMethod)

   function changeColorOnHover(e) {
    let brush = e.nativeEvent.srcElement.parentElement.parentElement.parentElement.children[2]
    setColor(brush.style.color)
    
   }

   function changeColorOnClick(e) {
    let brush = e.nativeEvent.srcElement.parentElement.parentElement.parentElement.children[2]
    setColor(brush.style.color)

   }


   function createPixel() {
    if(drawMethod === 'hover') {
        return(
            <div className={`pixel ${color}`} onMouseOver={changeColorOnHover}>
            </div>
        )
    } else if(drawMethod === 'click') {
        return(
            <div className={`pixel ${color}`} onMouseDown={props.dragDown} onClick={changeColorOnClick}>

            </div>
        )
    }
   }


   useEffect(() => {
    console.log("color", color)
   }, [color])

   useEffect(() => {
   }, [props.drag])

   useEffect(() => {
   }, [props.drawMethod])

    return (
        <>
        {createPixel()}
        </>
    )
}

export default Pixel;