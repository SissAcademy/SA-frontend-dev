import React from 'react'

class LoginForm extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
        this.state = {};
    }

    render()
    {
        return(
            <form className={'login'}>
                <input className={'email'} type={'email'} placeholder={'sissy email here'}/>
                <br/>
                <input className={'password'} type={'password'} placeholder={'password'}/>
                <br/>
                <button type="submit">
                    Enter the Academy &hearts;
                </button>
                <a href={'/registration'}>Registration</a>
                <a>Forgot your password?</a>
            </form>);
    }
}

export default LoginForm;