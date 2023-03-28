import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import Searcher from '../../components/searcher'

describe("Searcher", () => {
    const searchCriteria = 'Search This';
    const newSearchCriteria = 'Where are you?';

    test('When prop searchQuery is defined, Should display same value on text', ()=>{      
        render(<Searcher searchQuery={searchCriteria}/>);

        expect(screen.getByPlaceholderText(/What do you want to watch/i).value).toBe(searchCriteria);
    })

    test('When prop searchQuery is not defined, Should displaydefault text', ()=>{
        const expectedValue = '';
        
        render(<Searcher searchQuery={null}/>);

        expect(screen.getByPlaceholderText(/What do you want to watch/i).value).toBe(expectedValue);
    })

    test('When search criteria text changes and click search, Should call handleOnSearch function', ()=>{
        let calledItemResponse = '';
        const handleOnSearch = (receivedItem) => calledItemResponse = receivedItem;

        render(<Searcher searchQuery={searchCriteria} onSearch={handleOnSearch}/>)

        const textElement = screen.getByPlaceholderText(/What do you want to watch/i);
        fireEvent.change(textElement,{
            target :{value: newSearchCriteria}
        });

        expect(textElement.value).toBe(newSearchCriteria);

        fireEvent.click(screen.getByRole('button',{name: "Search"}));

        expect(calledItemResponse).toBe(newSearchCriteria);

    })

    test('When search criteria text changes and hit Enter, Should call handleOnSearch function', ()=>{
        let calledItemResponse = '';  
        const handleOnSearch = (receivedItem) => calledItemResponse = receivedItem;

        render(<Searcher searchQuery={searchCriteria} onSearch={handleOnSearch}/>)

        const textElement = screen.getByPlaceholderText(/What do you want to watch/i);
        fireEvent.change(textElement,{
            target :{value: newSearchCriteria}
        });

        expect(textElement.value).toBe(newSearchCriteria);

        fireEvent.keyDown(textElement, { key: 'Enter', charCode: 13 });

        expect(calledItemResponse).toBe(newSearchCriteria);
    })

    test('When search criteria text changes and hit P key, Should not call handleOnSearch function', ()=>{
        let calledItemResponse = '';  
        const handleOnSearch = (receivedItem) => calledItemResponse = receivedItem;

        render(<Searcher searchQuery={searchCriteria} onSearch={handleOnSearch}/>)

        const textElement = screen.getByPlaceholderText(/What do you want to watch/i);
        fireEvent.change(textElement,{
            target :{value: newSearchCriteria}
        });

        expect(textElement.value).toBe(newSearchCriteria);

        fireEvent.keyDown(textElement, { key: 'P', charCode: 80 });

        expect(calledItemResponse).toBe('');
    })
});