import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About'

function App() {
    return (
        <Router>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
        </Router>
    )
}

export default App;
