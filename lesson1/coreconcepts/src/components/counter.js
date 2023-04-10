import React, { useState }  from "react"
import '../styles/global.css'
import GenericButton from "./genericButton"
import {brElement, h1Element} from '../functions/generalElements'

export default function Counter (props) {   
    
    const [number, setNumber] = useState(props.number ?? 0);

    const buttonAdd = React.createElement(GenericButton, {title: "+", onClick: () => setNumber(number + 1)}, null);

    const buttonSustract = React.createElement(GenericButton, {title: "-", onClick: () => setNumber(number - 1)}, null);

        const displayDiv = React.createElement(
            'span',
            {   
                title: 'number-to-display',
                className: 'counter-title'
            },
            `${number}`
        )

        return React.createElement('span', null ,h1Element('Counter Component') , displayDiv , brElement(), buttonSustract, buttonAdd);
    }