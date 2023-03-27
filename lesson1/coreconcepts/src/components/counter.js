import React, { useState }  from "react"
import '../styles/global.css'
import GenericButton from "./genericButton"

export default function Counter (props) {   
    
    const [number, setNumber] = useState(props.number);

    const buttonAdd = React.createElement(GenericButton, {title: "+", onClick: () => setNumber(number + 1)}, null);

    const buttonSustract = React.createElement(GenericButton, {title: "-", onClick: () => setNumber(number - 1)}, null);

    const displayDiv = React.createElement(
        'span',
        {className: 'counter-title'},
        `${number}`
    )

    const br = React.createElement(
        'br',
       null,
       null
    )

    const h1 = React.createElement(
        'h1',
       {className:"title"},
       'Counter Component'
    )   
    
    return React.createElement('span', null ,h1 , displayDiv , br, buttonSustract, buttonAdd);
}