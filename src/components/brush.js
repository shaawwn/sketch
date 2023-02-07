import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaintBrush } from '@fortawesome/free-solid-svg-icons'

function Brush(props) {
    // brush is a div that basically changes its position depending 
    // on the mouse coordinates
    const [brushPosition, setBrushPosition] = useState({x: 0, y: 0})
    const [brushColor, setBrushColor] = useState(props.color)
    const [colors, setColors] = useState(props.colors)

    function attachMouseFollow() {
        console.log("attaching listener")
        const brush = document.querySelector('.brush');
        console.log("BRUSH", brush)
        brush.addEventListener('mousemove',(event) => {
            console.log("MOUSE EVENT", event)
        })
    }

    function attachPosition() {
        // attach the position to the brush
        let brush = document.querySelector('.brush')
        brush.style.top = props.position.y + 'px'
        brush.style.left = props.position.x + 'px'
        // console.log("X", props.position.x, "Y", props.position.y)
        // brush.style.
        // brush
    }


    function handleClick(e) {
        // 
        console.log("BRUSH CLICK", colors, brushColor)
    }

    function changeBrushColor() {
        let brush = document.querySelector('.brush')
        brush.style.color = props.color
        setBrushColor(props.color)
    }

    function handleMouseOver(e) {
        console.log("mouseover", e.target)
    }

    useEffect(() => {
        // attachMouseFollow()
        if(props.position === undefined) {
            // do nothing
        } else {
            attachPosition()
        }
    }, [props.position])

    useEffect(() => {
        // console.log("Changing brush color", props.color)
        changeBrushColor()
    }, [props.color])

    return(
        <div className={`brush`} onMouseOver={handleMouseOver} onClick={handleClick}>
            {/* <p>Brush</p> */}
            <FontAwesomeIcon className="fa-brush-icon" icon={faPaintBrush} size="2x" backgrounColor={"red"}/>
        </div>
    )
}

export default Brush