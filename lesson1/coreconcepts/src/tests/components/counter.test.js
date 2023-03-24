import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import Counter from '../../components/counter'

test('When prop number is defined, Should display same number', ()=>{
    const initialNumber = 100;
    render(<Counter number={initialNumber}/>)
    expect(screen.getByTitle('number-to-display')).toHaveTextContent(initialNumber);
})

test('When prop number is not defined, Should display default number Zero', ()=>{
    const defaultNumber = 0;
    render(<Counter/>)
    expect(screen.getByTitle('number-to-display')).toHaveTextContent(defaultNumber);
})

test('When prop number is null, Should display default number Zero', ()=>{
    const defaultNumber = 0;

    render(<Counter number={null}/>)

    expect(screen.getByTitle('number-to-display')).toHaveTextContent(defaultNumber);
})

test('When click on decrement button, Should decrement displayed value', ()=>{
    const initialNumber = 100;
    const expectedValue = initialNumber - 1;

    render(<Counter number={initialNumber}/>)

    expect(screen.getByTitle('number-to-display')).toHaveTextContent(initialNumber);
    
    fireEvent.click(screen.getByRole('button',{name: "-"}));
    expect(screen.getByTitle('number-to-display')).toHaveTextContent(expectedValue);
})

test('When click on increment button, Should increment displayed value', ()=>{
    const initialNumber = 100;
    const expectedValue = initialNumber + 1;

    render(<Counter number={initialNumber}/>)

    expect(screen.getByTitle('number-to-display')).toHaveTextContent(initialNumber);
    fireEvent.click(screen.getByRole('button',{name: "+"}));
    expect(screen.getByTitle('number-to-display')).toHaveTextContent(expectedValue);
})