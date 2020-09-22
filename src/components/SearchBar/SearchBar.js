import React from 'react';
import './SearchBar.css';

export default function SearchBar() {
    return (
        <div className="searchbar-container">
            <input type="text" placeholder="Search..."/>
            <button type="submit"><i className="material-icons">search</i></button>
        </div>
    )
}

