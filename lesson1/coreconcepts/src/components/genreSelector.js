import React, { useState }  from "react"
import GenericButton from "./genericButton";
import '../styles/global.css'
import {brElement, h1Element} from '../functions/generalElements'

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
    
    return React.createElement('span', null ,h1Element('Genre List Component'), brElement() , genreListElement);
}