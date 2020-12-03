import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from '../Home/Home';
import About from '../About/About'
import Contact from '../Contact/contact';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Login from '../Login/Login'
import AllCollections from '../All-collections/AllCollections'
import Aeonium from '../All-collections/Aeonium';
import Cactus from '../All-collections/Cactus';
import Sedum from '../All-collections/Sedum';
import Unusual from '../All-collections/Unusual';
import Item from '../Item/Item';
import Cart from '../Cart/Cart'

function App() {
    return (
        <Router>
            <NavBar />

            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/cart' component={Cart} />
                <Route path='/login' component={Login}/>

                <Route exact path='/all-collections' component={AllCollections}/>
                <Route path='/all-collections/:routeID' component={routeChange}/>
                
                
            </Switch>

            <Footer/>
        </Router>
    );
    
}

function routeChange({match}) {
    switch (match.params.routeID) {
        case 'aeonium': 
            return <Aeonium/>
            break;
        case 'cactus':
            return <Cactus/>
            break;
        case 'sedum':
            return <Sedum/>
            break;
        case 'unusual':
            return <Unusual/>
            break;
        default: 
            return <Item link={match.params.routeID}/>
    }
}

export default App;
