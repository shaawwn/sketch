import {useState, useEffect} from 'react';

function Color(props) {
    const [color, setColor] = useState(props.color)

    useEffect(() => {

    }, [])
    return(
        <div className={`pallete-color ${color}`} onClick={() => props.onClick(color)}>
        </div>
    )
}

export default Color;