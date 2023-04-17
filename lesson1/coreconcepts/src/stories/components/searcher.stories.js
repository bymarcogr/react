import Searcher from "../../components/searcher";

export default{
    title: 'Searcher',
    component: Searcher
}

const handleOnSearch = (searchString) => {
    alert(searchString);
}

export const Original = () => <Searcher onSearch = {(e) => handleOnSearch(e)} searchQuery={'story search'}></Searcher>

export const Secondary = () => <Searcher onSearch = {(e) => handleOnSearch(e)} searchQuery={'story search secondary'} buttonClassName={'genericButton'} textClassName={'glow-input'}></Searcher>