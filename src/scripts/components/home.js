import React from 'react'
import {withRouter} from "react-router-dom";
import store, {ReducerRoot} from '../store'


class Home extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
    }

    render()
    {
        store.dispatch(ReducerRoot.SetMessage('new message, yee!'));
        console.log(store.getState());
        return (<div>Home, sweet home!</div>)
    }
}

export default withRouter(Home);