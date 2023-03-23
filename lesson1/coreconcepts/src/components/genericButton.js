import React  from "react"
import '../styles/global.css'

export default class GenericButton extends React.Component{    

    render(){ 
        const button = React.createElement(
            'button',
            {
                onClick: this.props.onClick,
                className: this.props.className ?? 'genericButton'
            },
            this.props.title
        )

        return React.createElement('span', null , button);
    }
}
