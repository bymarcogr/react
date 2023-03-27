import React from "react"
import '../styles/global.css'

export const brElement = () =>{

    return React.createElement(
        'br',
        null,
        null
        )
}

export const h1Element = (title) => {
    
    return React.createElement(
        'h1',
        {className:"title"},
        title
        )   
}