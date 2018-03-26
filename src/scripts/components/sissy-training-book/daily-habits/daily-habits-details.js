import React from 'react'

class DailyHabitsDetails extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
    }

    Option(option)
    {
        let text;

        switch (option)
        {
            case 'empty':
                text = "You are yet to do the assignment";
                break;
            case 'missed':
                text = "You forgot to do the assignment";
                break;
            case 'done':
                text = "You have slept your norm without any significant interruptions";
                break;
            case 'partly-done':
                text = "You have slept your norm with some interruptions or slept less but no more than 1 hour difference";
                break;
            case 'failed':
                text = "You have slept more than 1 hour less then your norm";
                break;
            case 'denied':
                text = "You were denied";
                break;
        }

        return <li><div className={`icon ${option}`}/> - {text}</li>;
    }

    Options(options)
    {
        let listItemsDOMArray = [];
        for (let i = 0; i < options.length; i++)
            listItemsDOMArray.push(this.Option(options[i]))

        return (<ul>{listItemsDOMArray}</ul>)
    }

    render()
    {
        return (
            <aside id={'details'} className={this.props.state.group}>
                <h2>{this.props.state.group}</h2>
                <h3>{this.props.state.subgroup}</h3>
                <h4>Possible options</h4>
                {this.Options(this.props.state.options)}
            </aside>)
    }
}

export default DailyHabitsDetails;