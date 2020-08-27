import React from 'react';
import './Login.css';
import '../About/About.css'

class Login extends React.Component {
    render() {
        return (
            <div>
                <h1 className="page-title">CUSTOMER LOGIN</h1>

                <form className="login-form">
                    <label id="email-label" for='email'>EMAIL</label>
                    <input id="email" type="text" required />

                    <div id="password-line">
                        <label for='password'>PASSWORD</label>
                        <h6><em>Forgot your password?</em></h6>
                    </div>
                    <input id='password' type='password' required/>
                    <div id="submit-line">
                        <button type="submit">LOGIN</button>
                        <h6>New customer? <span>Sign up!</span></h6>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
