import React from 'react'
import academyLogo from '../../images/academy-header/academy-logo.png'

export default class AcademyHeader extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {isLogedin: false, url: this.CheckUrl()};
        console.log(window.location.pathname);
    }

    CheckUrl()
    {
        switch (window.location.pathname)
        {
            case "/tour":
                return "tour";
            case "/application":
                return "application";
        }
    }

    BeforeLogin()
    {
        return(
            [
                <ul className={'main-navigation__tour-submit'}>
                    <li><a className={this.state.url === "tour" ? "active" : null} href={"/tour"}>TAKE A TOUR</a></li>
                    <li><a className={this.state.url === "application" ? "active" : null} href={"/application"}>SUBMIT</a></li>
                </ul>,
                <ul className={'main-navigation__profile'}>
                    <li><a className={'button button--small-no-border'}>Login</a></li>
                </ul>
            ])
    }

    AfterLogin()
    {
        return(
            [
                <ul className={'main-navigation__academy-navigation'}>
                    <li><a>CAMPUS GROUNDS</a></li>
                    <li><a className={'active'}>TRAINING BOOK</a></li>
                </ul>,
                <ul className={'main-navigation__profile'}>
                    <li className={'profile'}><a>You are so sweet, Name. You keep it up.</a></li>
                    <li><a className={'button button--no-border button--login'}>Logout</a></li>
                </ul>
            ])
    }

    render()
    {
        return(
            <header className={"academy-header"}>
                <nav className={"main-navigation"}>
                    <a className={"main-page-link"} href={'/welcome'}>
                        <img src={academyLogo}/>
                        Sissification Academy
                    </a>
                    {this.state.isLogedin ? this.AfterLogin() : this.BeforeLogin()}
                </nav>
            </header>)
    }
}
