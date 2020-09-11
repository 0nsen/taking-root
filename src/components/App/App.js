import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from '../Home/Home';
import About from '../About/About'
import Contact from '../Contact/contact';
import Item from '../Item/Item.js'
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Login from '../Login/Login'
import AllCollections from '../All-collections/AllCollections'
import Aeonium from '../All-collections/Aeonium';
import Cactus from '../All-collections/Cactus';
import Sedum from '../All-collections/Sedum';
import Unusual from '../All-collections/Unusual';


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
            <Route exact path='/all-collections' component={AllCollections} />
            <Route path='/all-collections/aeonium' component={Aeonium} />
            <Route path='/all-collections/cactus' component={Cactus} />
            <Route path='/all-collections/sedum' component={Sedum} />
            <Route path='/all-collections/unusual' component={Unusual} />

            <Footer/>
        </Router>
    );
}

export default App;
