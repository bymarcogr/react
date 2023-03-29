import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import GenreSelector from '../../../components/genreSelector'

describe("GenreSelector", () => {

    const genresList = ['Genre 1',
    'Genre 2',
    'Genre 3']

    const selectedClassName = "netflixBarSelected";
    const nonSelectedClassName = "netflixBar";

    test('When prop genreList is send, Should display buttons with any genre selected', ()=>{
        render(<GenreSelector genreList={genresList}/>)
       
        expect(screen.getByRole('button',{name: genresList[0]})).toBeInTheDocument();
        expect(screen.getByRole('button',{name: genresList[0]})).toHaveClass(nonSelectedClassName);  
        expect(screen.getByRole('button',{name: genresList[1]})).toBeInTheDocument();  
        expect(screen.getByRole('button',{name: genresList[1]})).toHaveClass(nonSelectedClassName);  
        expect(screen.getByRole('button',{name: genresList[2]})).toBeInTheDocument();
        expect(screen.getByRole('button',{name: genresList[2]})).toHaveClass(nonSelectedClassName);  
    })

    
    test('When prop genreList is null, Should not display buttons', ()=>{        
        render(<GenreSelector genreList={null}/>);

        expect(screen.queryByText(genresList[0])).not.toBeInTheDocument(); 
        expect(screen.queryByText(genresList[1])).not.toBeInTheDocument(); 
        expect(screen.queryByText(genresList[2])).not.toBeInTheDocument();
    })

    test('When prop selectedGenre is send, Should highlight the selected button', ()=>{
        render(<GenreSelector genreList={genresList} selectedGenre= {genresList[0]}/>)
       
        expect(screen.getByRole('button',{name: genresList[0]})).toBeInTheDocument();
        expect(screen.getByRole('button',{name: genresList[0]})).toHaveClass(selectedClassName);
        expect(screen.getByRole('button',{name: genresList[1]})).toBeInTheDocument();  
        expect(screen.getByRole('button',{name: genresList[1]})).toHaveClass(nonSelectedClassName);  
        expect(screen.getByRole('button',{name: genresList[2]})).toBeInTheDocument();
        expect(screen.getByRole('button',{name: genresList[2]})).toHaveClass(nonSelectedClassName);        
    })

    test('When button is clicked, Should call handleOnClick function', ()=>{        
        let calledItemResponse = '';  
        const handleOnSelect = (receivedItem) => calledItemResponse = receivedItem;

        render(<GenreSelector genreList={genresList} selectedGenre= {genresList[0]} onSelect ={handleOnSelect}/>);
        fireEvent.click(screen.getByRole('button',{name:  genresList[2]}));

        expect(screen.getByRole('button',{name: genresList[0]})).toHaveClass(nonSelectedClassName);
        expect(screen.getByRole('button',{name: genresList[2]})).toBeInTheDocument();
        expect(screen.getByRole('button',{name: genresList[2]})).toHaveClass(selectedClassName);
        expect(calledItemResponse).toBe(genresList[2]);  
    })
});