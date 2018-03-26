import React from 'react'
import {BrowserRouter,Route, Switch, Redirect} from 'react-router-dom'
import NoMatch from './components/no-match'
import Home from './components/home'
import AuthPage from './components/auth/auth-page'
import WelcomePage from './components/welcome-page'
import DailyHabitsPage from './components/sissy-training-book/daily-habits/daily-habits-page'
import ReleaseLogPage from './components/sissy-training-book/release-log-page'
import SleepLogPage from './components/sissy-training-book/sleep-log-page'
import Test from './components/for-tests'

export default class Routes extends React.Component
{
    render()
    {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route exact path={"/login"} component={AuthPage}/>
                    <Route exact path={"/registration"} component={AuthPage}/>
                    <Route exact path={"/welcome"} component={WelcomePage}/>
                    <Route exact path={"/daily-habits"} component={DailyHabitsPage}/>
                    <Route exact path={"/release"} component={ReleaseLogPage}/>
                    <Route exact path={"/sleep"} component={SleepLogPage}/>
                    <Route exact path="/test" component={Test} />
                    <Route exact path="/404" component={NoMatch} />
                    <Redirect from={['/home','/index']} to="/" />
                    <Redirect from="*" to="/404" />
                </Switch>
            </BrowserRouter>
        )
    }
}