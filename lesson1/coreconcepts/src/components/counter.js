import React  from "react"
import '../styles/global.css'
import GenericButton from "./genericButton"

export default class Counter extends React.Component{    
    state = {
        number: this.props.number
      }

    sum = () => {
        this.setState((prevState) => ({ 
            number: prevState.number + 1 
         }))
    }

    substract= () => {
        this.setState((prevState) => ({ 
            number: prevState.number - 1 
         }))
    }

    render(){ 

        const buttonAdd = React.createElement(GenericButton, {title: "+", onClick:this.sum}, null);

        const buttonSustract = React.createElement(GenericButton, {title: "-", onClick:this.substract}, null);

        const displayDiv = React.createElement(
            'span',
            {className: 'counter-title'},
            `${this.state.number}`
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
}