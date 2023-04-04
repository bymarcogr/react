import React  from "react"
import '../styles/global.css'

export default function GenericButton (props) {
    return (
        <span>
            <button onClick ={props.onClick} className={props.className}>
            {props.title}
            </button>
        </span>
    );
}

GenericButton.defaultProps = {
    className:'genericButton'
}