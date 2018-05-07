import React from 'react'

export default class Spinner extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div className={'spinner-container'}>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
            </div>)
    }
}