import React from 'react'
import {withRouter} from "react-router-dom";
import store, {ReducerRoot} from '../../store'
import myDate from '../../helpers/date'
import STBNavBar from  './STB-nav-bar'

function PseudoData()
{
    let state =
        {
            goal: 8,
            data:
                [
                    {date: new Date(), sleep: 8, notes: " "},
                    {date: new Date(), sleep: 8, notes: " "},
                    {date: new Date(), sleep: 8, notes: " "},
                    {date: new Date(), sleep: 8, notes: " "},
                    {date: new Date(), sleep: 8, notes: " "},
                    {date: new Date(), sleep: 8, notes: " "},
                    {date: new Date(), sleep: 8, notes: " "},
                    {date: new Date(), sleep: 8, notes: " "},
                    {date: new Date(), sleep: 8, notes: " "},
                    {date: new Date(), sleep: 8, notes: " "},
                    {date: new Date(), sleep: 8, notes: " "},
                ]
        };

    return state;
}


class SleepLogPage extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
        this.state = new PseudoData();
        this.StateHandler = this.StateHandler.bind(this);
        this.Overview = this.Overview.bind(this);
        this.TableRows = this.TableRows.bind(this);
    }

    StateHandler(newState) {this.setState(newState);}


    TableRows()
    {
        let data = this.state.data;
        let trArray = [];
        for (let i = 0; i < data.length; i++)
        {
            console.log(data[i]);
            let tempDate;
            tempDate = (data[i].date ? myDate.formatDate(data[i].date) : null);
            trArray.push(
                <tr>
                    <td><input type={'date'} defaultValue={tempDate}/></td>
                    <td className={'delta-days'}>
                        <input type={"number"} defaultValue={data[i].sleep ? data[i].sleep : 0}/>
                        {data[i].sleep == 1 ? " hour" : " hours"}
                        </td>
                    <td>{data[i].notes}</td>
                </tr>)
        }
        return(trArray)
    }

    Overview()
    {
        return(
            <section id={'overview'}>
                <table>
                    <tr>
                        <th>Date</th>
                        <th>Sleep</th>
                        <th>Notes</th>
                    </tr>
                    {this.TableRows()}
                </table>
            </section>)
    }

    render()
    {
        console.log(this.state);
        return (
            <div className={'page STB-page'} id={'release-log-page'}>
                <header className={"page-header"}>Header</header>
                <main>
                    <STBNavBar/>
                    <header className={"STB-section-header"}><h1>Release Log</h1></header>
                    <section className={'main-section'}>
                        {this.Overview()}
                    </section>
                </main>
            </div>)
    }
}

export default withRouter(SleepLogPage);