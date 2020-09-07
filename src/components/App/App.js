import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from '../Home/Home';
import About from '../About/About'
import Contact from '../Contact/contact';
import Item from '../Item/Item.js'
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Login from '../Login/Login'
import AllCollections from '../All-collections/AllCollections'

function App() {
    return (
        <Router>
            <NavBar />
                
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/login' component={Login} />            
            <Route path='/product'>
                <Item name='Aeonium Emerald Ice'/>
            </Route>
            <Route path='/all-collections' component={AllCollections} />

            <Footer/>
        </Router>
    );
}

export default App;
