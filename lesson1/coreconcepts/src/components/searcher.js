import React, { useState }  from "react"
import '../styles/global.css'
import GenericButton from "./genericButton"
import {brElement, h1Element} from '../functions/generalElements'

export default function Searcher (props) {     
    
    const [searchQuery, setSearchQuery] = useState(props.searchQuery);

   const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            setSearchQuery(event.target.value)
            props.onSearch(searchQuery)
        }
    };

    const searchButton = React.createElement(GenericButton, {title: "Search", onClick: () => props.onSearch(searchQuery), className:"netflixSearch"}, null);
    
    const searchTextBar = React.createElement(
        'input',
        {            
            type:'text',
            placeholder: 'What do you want to watch?',
            value:  searchQuery,
            onKeyDown: (e) => handleKeyDown(e),
            onChange: (e) =>  setSearchQuery(e.target.value),
            className:'search'
        }
    )
    
    return React.createElement('span', null ,h1Element('Search Component'), brElement() , searchTextBar ,searchButton);
}