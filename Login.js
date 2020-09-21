import React, { Component } from 'react'
import './login.css';



export class Login extends Component {
  componentDidMount () {
    const script = document.createElement("script");

    script.src = "./loginno.js";
    script.async = true;

    document.body.appendChild(script);
}
    render() {
        return (
            <div>
          
                      <meta charSet="utf-8" />
                      <meta name="viewport" content="width=device-width, initial=scale=1.0" />
                      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                      <link rel="stylesheet" href="https://use.fontawesome.com/release/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />
                      <title>LOGIN admin/user</title>
                      <link rel="stylesheet" type="text/css" href="./login.css" />
                      <h2>RiskCal login/signup </h2>
                      <div className="container" id="container">
                        <div className="form-container sign-up-container">
                          <form action="#">
                            <h1>Create Account/New Patient</h1>
                            <span>or use your email for registration</span>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button onclick="location.href='cal.html'">Sign Up</button>
                          </form>
                        </div>
                        <div className="form-container sign-in-container">
                          <form action="#">
                            <h1>Sign in/Existing Patient</h1>
                            <span>or use your account</span>
                            <input type="UniqueId" placeholder="UniqueId" />
                            <input type="Hospital Name" placeholder="Hospital Name" />
                            <a href="#">Forgot your uniqueid?</a>
                            <button onclick="location.href='cal.html'">Sign In</button>
                          </form>
                        </div>
                       
                      </div>
                    </div>
                  );
                }
              };
         

export default Login;
