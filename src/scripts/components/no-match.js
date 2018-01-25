import React from 'react'
import store from '../store'

export default class extends React.Component
{
    render()
    {
        return(<div>{store.getState().root.message}</div>)
    }
}
