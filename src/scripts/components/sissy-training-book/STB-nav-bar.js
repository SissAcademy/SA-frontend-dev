import React from 'react'

export default class STBNavBar extends React.Component {

    CheckForActive(className)
    {
        let href = window.location.href;
        href = href.split('/')[href.split('/').length - 1];
        return className === href ? className + " active": className
    }

    render()
    {
        this.CheckForActive('lol');
        return(
            <nav>
                <ul>
                    <li><a href={"/daily-habits"} className={this.CheckForActive("daily-habits")}>Daily Habits</a></li>
                    <li><a href={"/release"} className={this.CheckForActive("release")}>Release Log</a></li>
                    <li><a href={"/sleep"} className={this.CheckForActive("sleep")}>Sleep Log</a></li>
                </ul>
            </nav>
        )
    }

}