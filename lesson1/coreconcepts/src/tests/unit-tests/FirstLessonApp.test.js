import { render, screen } from '@testing-library/react';
import FirstLessonApp from '../../components/firstLessonApp';

describe("FirstLessonApp", () => {

  test('renders Counter Component', () => {
    render(<FirstLessonApp />);
    expect(screen.getByText(/Counter Component/i)).toBeInTheDocument();
    expect(screen.getByRole('button',{name: "+"})).toBeInTheDocument();
    expect(screen.getByRole('button',{name: "-"})).toBeInTheDocument();  
  });
  
  test('renders Searcher Component', () => {
    render(<FirstLessonApp />);
    expect(screen.getByText(/Search Component/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/What do you want to watch/i)).toBeInTheDocument();
    expect(screen.getByRole('button',{name: "Search"})).toBeInTheDocument();
  });
   test('renders Genre Selector Component', () => {
    render(<FirstLessonApp />);
    expect(screen.getByText(/Genre List Component/i)).toBeInTheDocument();
    expect(screen.getByRole('button',{name: "Action"})).toBeInTheDocument();
    expect(screen.getByRole('button',{name: "Comedy"})).toBeInTheDocument();  
    expect(screen.getByRole('button',{name: "Drama"})).toBeInTheDocument();
    expect(screen.getByRole('button',{name: "Fantasy"})).toBeInTheDocument();  
    expect(screen.getByRole('button',{name: "Horror"})).toBeInTheDocument();
    expect(screen.getByRole('button',{name: "Mystery"})).toBeInTheDocument();  
    expect(screen.getByRole('button',{name: "Romance"})).toBeInTheDocument();
    expect(screen.getByRole('button',{name: "Thriller"})).toBeInTheDocument();  
    expect(screen.getByRole('button',{name: "Western"})).toBeInTheDocument();  
  });
});