import React from 'react'

class RegistrationForm extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
        this.state =
            {
                requestData: null
            };
        this.SetRequestData = this.SetRequestData.bind(this);
        this.OnSubmit = this.OnSubmit.bind(this)
    }

    OnSubmit(e)
    {
        e.preventDefault();
        if (this.state.requestData !== null)
            if (this.state.requestData.email !== null)
                if (this.state.requestData.password !== null &&
                    this.state.requestData.password === this.state.requestData.password_conformation)
                    Requests.Registration(this.state.requestData);
                else
                    console.log('no pass or pass !== pass-conf');
            else
                console.log('no email');
        else
            console.log('no fields');

    }

    SetRequestData(e, path)
    {
        let requestData = this.state.requestData ? this.state.requestData : {};
        requestData[path] = e.target.value;
        this.setState({requestData: requestData})
    }

    render()
    {
        return(
            <form className={'login'}>
                <input className={'email'} type={'email'} placeholder={'sissy email here'}
                       onChange={(e)=>this.SetRequestData(e,'email')}/>
                <br/>
                <input className={'password'} type={'password'} placeholder={'password'}
                       onChange={(e)=>this.SetRequestData(e,'password')}/>
                <br/>
                <input className={'password'} type={'password'} placeholder={'password confirmation'}
                       onChange={(e)=>this.SetRequestData(e,'password_conformation')}/>
                <br/>
                <button type="submit" onClick={this.OnSubmit}>
                    Become a slut &hearts;
                </button>
                <a href={'/login'}>Login</a>
            </form>);
    }
}

export default RegistrationForm;