import React from 'react';
import './Login.css';

class Login extends React.Component {
    openForm() {
        document.querySelector(".login-form").style.display = "flex";
    }

    closeForm() {
        document.querySelector(".login-form").style.display = "none";
        document.querySelector(".login-form").reset();
    }

    render() {
        return (
            <div className="login">
                <button className="open-button" onClick={this.openForm}>LOGIN</button>
                <form action="#" className="login-form">
                    <p className="close"><span onClick={this.closeForm}>X</span></p>
                    <h1>Welcome</h1>

                    <label for="email"><b>Email</b></label>
                    <input className="login-input" id="email" type="text" required/>
                    <div className="pw">
                        <label for="password"><b>Password</b></label>
                        <a href="#"><em>Forgot your password?</em></a>
                    </div>

                    <input className="login-input" id="password" type="password" required/>

                    <div className="auth">
                        <button type="submit" className="btn">Login</button>
                        <button type="submit" className="btn signup">Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;
