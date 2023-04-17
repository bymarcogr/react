import GenreSelector from "../../components/genreSelector";

export default{
    title:'Genre List',
    component: GenreSelector
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

const handleOnSelect = (genreSelected) => {
    alert(genreSelected);
  }

export const Original = () => <GenreSelector  genreList={inputData} selectedGenre={'Western'} onSelect={ (e) => handleOnSelect(e)}></GenreSelector>

export const Secondary = () => <GenreSelector  genreList={inputData} selectedGenre={'Western'} onSelect={ (e) => handleOnSelect(e)} primaryButtonClassName={'netflixBar'} secondaryButtonClassName={'netflixBarSelected'}></GenreSelector>