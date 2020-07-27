import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    render() {
        return (
            <div className="searchbar-container">
                <input type="text" placeholder="Search..."/>
                <button type="submit"><i className="material-icons">search</i></button>
            </div>
        )
    }
}

export default SearchBar;
