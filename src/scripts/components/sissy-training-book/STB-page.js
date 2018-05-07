import React         from 'react'
import {withRouter}  from "react-router-dom";
import AcademyHeader from '../academy-header'
import AcademyFooter from '../academy-footer'
import TodayPage     from './today-page'
import NextWeekPage  from './next-week-page'

class STBPage extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
    }

    Content()
    {
        switch (window.location.hash)
        {
            case "#today":
                return <TodayPage/>;
            case "#next-week":
                return <NextWeekPage/>;
            default:
                return null;
        }
    }

    SidebarNavigation()
    {
        return (
            <aside>
                <nav className={"STB-navigation"}>
                    <ul className={'today-next-week'}>
                        <li><a className={'today' + (window.location.hash === "#today" ? " active" : null)} href={"/training-book#today"}>today</a></li>
                        <li><a className={'next-week' + (window.location.hash === "#next-week" ? " active" : null)} href={"/training-book#next-week"}>next week</a></li>
                    </ul>
                    <ul className={'girl-mode-wardrobe'}>
                        <li><a className={'girl-mode'}>girl mode</a></li>
                        <li><a className={'wardrobe'}>wardrobe</a></li>
                    </ul>
                    <ul className={'my-something'}>
                        <li><a className={'my-careers'}>my careers</a></li>
                        <li><a className={'my-courses'}>my courses</a></li>
                        <li><a className={'my-stats'}>my stats</a></li>
                        <li><a className={'my-rules'}>my rules</a></li>
                    </ul>
                    <ul className={'logs'}>
                        <li><a className={'release-log'}>release log</a></li>
                        <li><a className={'sleep-log'}>sleep log</a></li>
                        <li><a className={'hypno-log'}>hypno log</a></li>
                        <li><a className={'task-log'}>task log</a></li>
                    </ul>
                </nav>
            </aside>)
    }

    render()
    {
        return(
            <div className={"page"} id={"STB-page"}>
                <AcademyHeader/>
                <section className={"page-content"}>
                    <header className={"STB-header"}>
                        <h1>Sissy Name's Training Book</h1>
                        <button className={"setup-btn"}>setup</button>
                    </header>
                    <section className={'main-section'}>
                        {this.SidebarNavigation()}
                        {this.Content()}
                    </section>
                </section>
                <AcademyFooter/>
            </div>)
    }
}


export default withRouter(STBPage);