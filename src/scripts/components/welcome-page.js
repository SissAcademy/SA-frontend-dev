import React from 'react'
import {withRouter} from "react-router-dom";
import store, {ReducerRoot} from '../store'


class Login extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
        this.state =
            {
                isLoginPopupOpen: false,
                content: 'standard'
            };
        this.StateController = this.StateController.bind(this);
    }

    StateController(newState)
    {
        this.setState(newState);
    }

    ContentStandard()
    {
        return (
            <main className={'standard'}>
                <h2>Want to become the girl of your dreams?</h2>
                <p>
                    Feel more confident, explore your sexuality, sensuality and femininity.
                    Reach full sissification within a year; everything is possible at the Academy.
                    A positive approach to the sissification that will make your dreams a reality!
                </p>
                <div className={'image'}/>
                <div className={'buttons'}>
                    <button onClick={()=>this.setState({content: 'information'})}>
                        I want to learn more...
                    </button>
                    <button onClick={()=>this.setState({content: 'enroll'})}>
                        I want to join the Academy!
                    </button>
                </div>
            </main>);
    }

    ContentInformation()
    {
        return (
            <main className={'information'}>
                <h2>Want to become the girl of your dreams?</h2>
                <p>
                    Feel more confident, explore your sexuality, sensuality and femininity.
                    Reach full sissification within a year; everything is possible at the Academy.
                    A positive approach to the sissification that will make your dreams a reality!
                </p>
                <div className={'image'}/>
                <div className={'buttons'}>
                    <button>
                        I want to learn more...
                    </button>
                    <button>
                        I want to join the Academy!
                    </button>
                </div>
            </main>);
    }

    ContentEnroll()
    {
        return (
            <main className={'enroll'}>
                {this.EnrollmentForm()}
            </main>);
    }

    EnrollmentForm()
    {
        return (
            <form>
                <labe></labe>
                <input/>
                <labe></labe>
                <input/>
            </form>)
    }

    ContentSelection()
    {
        switch (this.state.content)
        {
            case 'standard':
                return this.ContentStandard();
            case 'information':
                return this.ContentInformation();
            case 'enroll':
                return this.ContentEnroll();
            default: console.log('ERROR! Wrong content type.')
        }
    }

    render()
    {
        console.log(store.getState());
        return (
            <div id="welcome-page" className="page">
                <header>
                    <h1>
                        <span>SISSIFICATION</span>
                        <br/>
                        <span>ACADEMY</span>
                    </h1>
                </header>
                <div className={'main-container'}>
                    <button>
                        Login to the Academy
                    </button>
                    {this.ContentSelection()}
                </div>
            </div>)
    }
}

export default withRouter(Login);