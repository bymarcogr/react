import React, { useState }  from "react"
import '../styles/global.css'
import GenericButton from "./genericButton"

export default function Searcher (props) {     
    
    const [searchQuery, setSearchQuery] = useState(props.searchQuery ?? "");

   const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            setSearchQuery(event.target.value)
            props.onSearch(searchQuery)
        }
    };

    return (
        <span>           
            <input type={'text'}
            placeholder={'What do you want to watch?'} 
            value={searchQuery} 
            onKeyDown = {(e) => handleKeyDown(e)}
            onChange = {(e) =>  setSearchQuery(e.target.value)}
            className = {props.textClassName ?? 'search'}></input>
            <GenericButton title={"Search"} onClick={() => props.onSearch(searchQuery)} className={props.buttonClassName ?? "netflixSearch"}></GenericButton>
        </span>
    );
}

Searcher.defaultProps = {
    searchQuery:"",
    onSearch: () => console.log('on search')
    
}