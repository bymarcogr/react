import React  from "react"
import '../styles/global.css'

export default function GenericButton (props) {

    const button = React.createElement(
        'button',
        {
            onClick: props.onClick,
            className: props.className ?? 'genericButton'
        },
        props.title
    )
    
    return React.createElement('span', null , button);
}