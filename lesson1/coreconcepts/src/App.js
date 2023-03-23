import Counter from './components/counter'
import Searcher from './components/searcher'
import GenreSelector from './components/genreSelector'

import React  from "react"

export default class App extends React.Component {

onSearchCallback = (searchString) => {
    alert(searchString);
}

onSelectedCallback = (genreSelected) => {
  alert(genreSelected);
}

  render() {

    const counterElement = React.createElement(Counter, {number: 1}, null);

    const searchElement = React.createElement(Searcher, {searchQuery: "Search String?", onSearch: this.onSearchCallback},null);

    const inputData = ['Action',
    'Comedy',
    'Drama',
    'Fantasy',
    'Horror',
    'Mystery',
    'Romance',
    'Thriller',
    'Western']    
   
    const genreListElement = React.createElement(GenreSelector,{genreList: inputData, selectedGenre:"Fantasy", onSelect: this.onSelectedCallback});

    return React.createElement('div', null ,counterElement,searchElement,genreListElement);
  }
}