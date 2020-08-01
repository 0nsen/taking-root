import React from 'react';
import './Login.css';
import NavBar from '../NavBar/NavBar.js';
import Footer from '../Footer/Footer.js';
import {Link, Route} from 'react-router-dom';

class Login extends React.Component {
    render() {
        return (
            <div className="login">
                <button><Link to='/login'>LOGIN</Link></button>
                <Route path='/login' exact component={login} />
            </div>
        )
    }
}

const login = () => (
    <div>
        <NavBar />

        <h1>CUSTOMER LOGIN</h1>
        <form>
            <label for="email">EMAIL</label>
            <input type="text" id="email"/>

            <label for="passwod">PASSWORD</label>
            <a>Forgot your password?</a>
            <input type="password" id="password"/>
            
            <h6>New Customer?</h6>
            <a>Sign up</a>
        </form>

        <Footer />
    </div>
);

export default Login;
