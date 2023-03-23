import React  from "react"
import GenericButton from "./genericButton";
import '../styles/global.css'

export default class GenreSelector extends React.Component{     
    
    state = {
        genreList: this.props.genreList,
        selectedGenre : this.props.selectedGenre,
        onSelect: this.props.onSelect,
    }

    handleOnSelect() {
       this.state.onSelect(this.state.selectedGenre);      
    }
    
    render(){ 
       const genreList = 
              this.state.genreList.map(function(genre){
                return React.createElement(GenericButton, {
                    key: genre,
                    title:genre,
                    className: genre === this.state.selectedGenre ? "netflixBarSelected": 'netflixBar',
                    onClick: (e)=> this.setState({selectedGenre:e.target.innerText },this.handleOnSelect)  
                });
              }.bind(this)) ;
        
        const br = React.createElement(
            'br',
           null,
           null
        )

        const h1 = React.createElement(
            'h1',
           {className:"title"},
           'Genre List Component'
        )

        return React.createElement('span', null ,h1, br , genreList);
    }
}