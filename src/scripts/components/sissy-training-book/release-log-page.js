import React from 'react'
import {withRouter} from "react-router-dom";
import store, {ReducerRoot} from '../../store'
import STBNavBar from './STB-nav-bar'

function PseudoData()
{
    let state =
        {
            options:
            {
                arousal_values: [-20,-10,0,10,20,30,40,50,60,70,80,90,100],
                arousal_descriptions:  ["NO, never, makes me sick, keep it away or I might cry or scream.",
                                        'Thoughts of sex make me nauseous, not my thing at the moment.',
                                        'Cannot come up with a reason to have it. Meh, do not really care.',
                                        "Not fully opposed to it, if someone or something really catches my attention.",
                                        'I am open to the idea of having sex, but I would need to be pushed a bit.',
                                        'Sex would not be a bad thing, but I can go without fine for now.',
                                        "Would kind of like sex, would be fine to wait til later. Can ignore and focus on other things.",
                                        'Would do if offered. Might seek it out. Seeing certain people or things trigger toughts.',
                                        'Feel desire, active seeking but not desperate, sometimes distracted',
                                        "Would like to get off, easily distracted by thoughts of sex",
                                        'REALLY need release SOON, hard to concentrate on other things.',
                                        'Unsatisfied twitching, turned on constantly. Desperately need it.',
                                        "Going CRAZY, cannot stop touching, humping, thinking only of *drools* Gah..."],
                ejaculation_types: ["squirting big load", 'squirting small load',"leaking","ruined", "no load"],
                orgasm_simulation: ["clitty only stroking","clitty only humping","clitty only rubbing","clitty only vibrator","anal with clitty", "Anal only fucking", "Anal only vibrator", "Mind only"],
                clitty_state: ["locked", "limp", "loose", "hard", "spikes"]
            },
            data:
            [
                {date: new Date(), arousal_before: 80, arousal_after: 50, ejaculation_type: "squirting big load", orgasm_simulation: "clitty only humping", clitty_state: "limp"},
                {date: new Date(), arousal_before: 80, arousal_after: 50, ejaculation_type: "no load", orgasm_simulation: "anal with clitty", clitty_state: "hard"},
            ]
        };

    return state;
}


class ReleaseLogPage extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
        this.state = new PseudoData();
        this.StateHandler = this.StateHandler.bind(this);
        this.Overview = this.Overview.bind(this);
        this.TableRows = this.TableRows.bind(this);
        this.Select = this.Select.bind(this);
    }

    StateHandler(newState) {this.setState(newState);}


    TableRows()
    {
        let data = this.state.data;
        let options = this.state.options;
        let trArray = [];
        for (let i = 0; i < data.length; i++)
        {
            let datesDelta;
            if (i !== 0)
            {
                let date1 = new Date("7/13/2010");
                let date2 = new Date("12/15/2010");
                let timeDiff = Math.abs(date2.getTime() - date1.getTime());
                datesDelta = Math.ceil(timeDiff / (1000 * 3600 * 24));
                datesDelta = datesDelta.toString() + " days"
            }
            else
                datesDelta = "First release";

            trArray.push(
                <tr>
                    <td>{data[i].date.toLocaleDateString()}</td>
                    <td className={'delta-days'}>{datesDelta}</td>
                    <td>{this.Select(options.arousal_values,data[i].arousal_before)}</td>
                    <td>{this.Select(options.arousal_values,data[i].arousal_after)}</td>
                    <td>{this.Select(options.ejaculation_types,data[i].ejaculation_type)}</td>
                    <td>{this.Select(options.orgasm_simulation,data[i].orgasm_simulation)}</td>
                    <td>{this.Select(options.clitty_state,data[i].clitty_state)}</td>
                </tr>)
        }
        return(trArray)
    }

    Select(options, defaultValue)
    {
        let optionsDOMs = [];
        optionsDOMs.push(<option> </option>);
        for (let i = 0; i < options.length; i++)
            optionsDOMs.push(<option>{options[i]}</option>)

        return (
            <select defaultValue={defaultValue}>
                {optionsDOMs}
            </select>)
    }

    Overview()
    {
        return(
            <section id={'overview'}>
                <table>
                    <tr>
                        <th>Date</th>
                        <th>Chaste days</th>
                        <th>Before</th>
                        <th>After</th>
                        <th>Ejaculation</th>
                        <th>Orgasm stimulation</th>
                        <th>Clitty state</th>
                    </tr>
                    {this.TableRows()}
                </table>
            </section>)
    }

    Details()
    {

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

export default withRouter(ReleaseLogPage);