import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    render() {
        return (
            <form method="POST">
                <input type="text" placeholder="Search"/>
            </form>
        )
    }
}

export default SearchBar;
