import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import Routes from './router'
import Store from './store'
import '../stylesheets/main.css';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

function component() {
    let element = document.createElement('div');
    element.id = 'root';

    return element;
}
document.body.appendChild(component());
ReactDOM.render(<Provider store={Store}><Routes /></Provider>, document.getElementById('root'));

if (module.hot)
{
    module.hot.accept(this, function()
    {
        console.log('Accepting the updated index.js module!');
    })
}