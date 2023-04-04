import Counter from './components/counter'
import Searcher from './components/searcher'
import GenreSelector from './components/genreSelector'

import React  from "react"

export default function App () {

const handleOnSearch = (searchString) => {
    alert(searchString);
}

const handleOnSelect = (genreSelected) => {
  alert(genreSelected);
}

const inputData = ['Action',
'Comedy',
'Drama',
'Fantasy',
'Horror',
'Mystery',
'Romance',
'Thriller',
'Western']

return (
  <React.Fragment>
    <h1 className="title">Counter Component</h1>
    <Counter number={1} ></Counter>
    <h1 className="title">Search Component</h1>
    <br/>
    <Searcher searchQuery={"Search String?"} onSearch={(e) => handleOnSearch(e)}></Searcher>
    <h1 className="title">Genre List Component</h1>
    <br/>
    <GenreSelector genreList={inputData} selectedGenre={'Fantasy'} onSelect={ (e) => handleOnSelect(e)}></GenreSelector>
  </React.Fragment>
  );  
}