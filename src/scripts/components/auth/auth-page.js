import React from 'react'
import {withRouter} from "react-router-dom";
import Requests from '../../api'
import LoginForm from './login-form'
import RegistrationForm from './registration-form'

class AuthPage extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
        this.state =
            {
                typeOfAuth: window.location.href.toString().split(window.location.host)[1],
            };
    }

    render()
    {
        console.log(this.state.requestData);
        Requests.Ping();
        return (
            <div id={'auth-page'}>
                <header>
                    <h1>
                        <span>SISSIFICATION</span>
                        <br/>
                        <span>ACADEMY</span>
                    </h1>
                </header>
                <main>
                    {this.state.typeOfAuth === '/login' ? <LoginForm/> :
                    (this.state.typeOfAuth === '/registration' ? <RegistrationForm/> :
                     console.log('ERROR: wrong type of authorisation'))}
                     <a href={'/welcome'}>Want to know more?</a>
                </main>
            </div>)
    }
}

export default withRouter(AuthPage);