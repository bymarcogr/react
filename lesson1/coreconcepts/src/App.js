import Counter from './components/counter'
import Searcher from './components/searcher'
import GenreSelector from './components/genreSelector'

import React  from "react"

export default function App () {

const onSearchCallback = (searchString) => {
    alert(searchString);
}

const onSelectedCallback = (genreSelected) => {
  alert(genreSelected);
}

const counterElement = React.createElement(Counter, {number: 1}, null);

const searchElement = React.createElement(Searcher, {searchQuery: "Search String?", onSearch: (e) => onSearchCallback(e)},null);

const inputData = ['Action',
'Comedy',
'Drama',
'Fantasy',
'Horror',
'Mystery',
'Romance',
'Thriller',
'Western']    

const genreListElement = React.createElement(GenreSelector,{genreList: inputData, selectedGenre:"Fantasy", onSelect: (e) => onSelectedCallback(e)});

return React.createElement('div', null ,counterElement,searchElement,genreListElement);
  
}