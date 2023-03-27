import React, { useState }  from "react"
import GenericButton from "./genericButton";
import '../styles/global.css'

export default function GenreSelector (props) {

    const [selectedGenre, setSelectedGenre] = useState(props.selectedGenre);

    const genreListElement = props.genreList.map(function(genre){
                            return React.createElement(GenericButton, {
                                key: genre,
                                title:genre,
                                className: genre === selectedGenre ? "netflixBarSelected": 'netflixBar',
                                onClick: (e)=> {setSelectedGenre(e.target.innerText); props.onSelect(selectedGenre); }  
                            });
                            }) ;

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
    
    return React.createElement('span', null ,h1, br , genreListElement);
}