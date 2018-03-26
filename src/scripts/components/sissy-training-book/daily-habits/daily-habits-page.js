import React from 'react'
import {withRouter} from "react-router-dom";
import store, {ReducerRoot} from '../../../store'
import DailyHabitsDetails from './daily-habits-details'
import DailyHabitsOverview from './daily-habits-overview'
import STBNavBar from '../STB-nav-bar'

class DailyHabitsPage extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
        this.state = {
            stateDetails: null,
            isShowDetails: false
        };
        this.StateHandler = this.StateHandler.bind(this);
    }

    StateHandler(newState) {this.setState(newState);}

    render()
    {
        return (
            <div className={'page STB-page'} id={'daily-habits-page'}>
                <header className={"page-header"}>Header</header>
                <main>
                    <STBNavBar/>
                    <header className={"STB-section-header"}><h1>Daily Habits</h1></header>
                    <section className={'main-section'}>
                        <DailyHabitsOverview StateHandlerPage={this.StateHandler}/>
                        {this.state.isShowDetails ? <DailyHabitsDetails state={this.state.stateDetails}/> : null}
                    </section>
                </main>
            </div>)
    }
}

export default withRouter(DailyHabitsPage);