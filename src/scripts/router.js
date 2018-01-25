import React from 'react'
import {BrowserRouter,Route, Switch, Redirect} from 'react-router-dom'
import NoMatch from './components/no-match'
import Home from './components/home'
import AuthPage from './components/auth/auth-page'
import WelcomePage from './components/welcome-page'


export default class Routes extends React.Component
{
    render()
    {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route path={"/login"} component={AuthPage}/>
                    <Route path={"/registration"} component={AuthPage}/>
                    <Route path={"/welcome"} component={WelcomePage}/>
                    <Route path="/404" component={NoMatch} />
                    <Redirect from={['/home','/index']} to="/" />
                    <Redirect from="*" to="/404" />
                </Switch>
            </BrowserRouter>
        )
    }
}