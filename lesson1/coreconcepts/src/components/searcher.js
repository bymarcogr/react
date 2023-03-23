import React  from "react"
import '../styles/global.css'
import GenericButton from "./genericButton"

export default class Searcher extends React.Component{     
    
    state = {
        searchQuery: this.props.searchQuery,
        onSearch: this.props.onSearch
    }

    handleSearch() {
      this.state.onSearch(this.state.searchQuery);
    }

    handleKeyDown = (event) => {
        if (event.key === "Enter") {
            this.updateSearchQuery(event.target.value)
            this.handleSearch();
        }
    };

    handleChange = (event) => {
        this.updateSearchQuery(event.target.value);
      };

    updateSearchQuery = (value) => {
        this.setState({ 
            searchQuery:value 
         });
    }

    render(){ 
        this.handleSearch = this.handleSearch.bind(this);
        
        const searchButton = React.createElement(GenericButton, {title: "Search", onClick:this.handleSearch, className:"netflixSearch"}, null);
        
        const searchTextBar = React.createElement(
            'input',
            {            
                type:'text',
                placeholder: 'What do you want to watch?',
                value:  this.state.searchQuery,
                onKeyDown: this.handleKeyDown,
                onChange: this.handleChange,
                className:'search'
            }
        )

        const br = React.createElement(
            'br',
           null,
           null
        )

        const h1 = React.createElement(
            'h1',
           {className:"title"},
           'Search Component'
        )

        return React.createElement('span', null ,h1, br , searchTextBar ,searchButton);
    }
}
