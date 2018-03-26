import React from 'react'

function PseudoData()
{
    let optionsMinimum = ['done','empty','missed',"failed"];
    let optionsExtended = optionsMinimum.slice().concat('partly-done');
    let optionsDenied = optionsExtended.slice().concat('denied');
    console.log(optionsExtended);
    let state =
    {
        groups:
        [
            {
                subgroups:
                [
                    {group: "energy",subgroup: "sleep", options: optionsExtended, days: DayData("done")},
                    {group: "energy",subgroup: "release", options: optionsDenied, days: DayData("denied")},
                    {group: "energy",subgroup: "yoga", options: optionsExtended, days: DayData()},
                    {group: "energy",subgroup: "energy", options: optionsExtended, days: DayData()},
                ]
            },
            {
                subgroups:
                    [
                        {group: "nutrition",subgroup: "breakfast", options: optionsMinimum, days: DayData()},
                        {group: "nutrition",subgroup: "pre_lunch_snack", options: optionsMinimum, days: DayData()},
                        {group: "nutrition",subgroup: "lunch", options: optionsMinimum, days: DayData("missed")},
                        {group: "nutrition",subgroup: "afternoon_snack", options: optionsMinimum, days: DayData()},
                        {group: "nutrition",subgroup: "dinner", options: optionsMinimum, days: DayData()},
                        {group: "nutrition",subgroup: "night_snack", options: optionsMinimum, days: DayData("failed")},
                    ]
            },
            {
                subgroups:
                    [
                        {group: "conditioning",subgroup: "sissy_training_book_entry", options: optionsExtended, days: DayData()},
                        {group: "conditioning",subgroup: "daily_conditioning", options: optionsExtended, days: DayData()},
                        {group: "conditioning",subgroup: "sissification_hypnosis", options: optionsExtended, days: DayData("missed")},
                        {group: "conditioning",subgroup: "inspiration", options: optionsExtended, days: DayData()},
                        {group: "conditioning",subgroup: "feminization_study", options: optionsExtended, days: DayData()},
                    ]
            },
            {
                subgroups:
                    [
                        {group: "style",subgroup: "fashion_magazine", options: optionsExtended, days: DayData()},
                        {group: "style",subgroup: "sissy_lips", options: optionsExtended, days: DayData()},
                        {group: "style",subgroup: "shower", options: optionsExtended, days: DayData("missed")},
                        {group: "style",subgroup: "shaving", options: optionsExtended, days: DayData()},
                        {group: "style",subgroup: "make_up", options: optionsExtended, days: DayData()},
                        {group: "style",subgroup: "dolled_up", options: optionsExtended, days: DayData("done")},
                        {group: "style",subgroup: "elegance", options: optionsExtended, days: DayData()},
                        {group: "style",subgroup: "walking", options: optionsExtended, days: DayData('partly-done')},
                    ]
            },
            {
                subgroups:
                    [
                        {group: "social",subgroup: "social_media", options: optionsExtended, days: DayData("failed")},
                        {group: "social",subgroup: "mantra", options: optionsExtended, days: DayData("done")},
                        {group: "social",subgroup: "chit_chatting", options: optionsExtended, days: DayData("missed")},
                    ]
            }
        ],
    };

    function DayData(status = "empty",date = new Date())
    {
        let daysArray = [];
        for (let i = 0; i < 28; i++)
            daysArray.push({status: status,date: date})
        return daysArray;
    }

    return state;
}

class DailyHabitsOverview extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
        this.state = new PseudoData();
        this.SubGroupDOMs = this.SubGroupDOMs.bind(this);
        this.GroupDOMs = this.GroupDOMs.bind(this);
        this.Week = this.Week.bind(this);
        this.Month = this.Month.bind(this);
        this.SubgroupLabel = this.SubgroupLabel.bind(this);
        this.SubgroupLabels = this.SubgroupLabels.bind(this);
    }

    SubGroupDOMs(subgroupArray, weekNumber)
    {
        let subGroupDOMsArray = [];
        for (let i = 0; i < 7; i++)
            subGroupDOMsArray.push (<td><CustomCheckBox state = {{group: subgroupArray.group, subgroup: subgroupArray.subgroup,
                                                                  options: subgroupArray.options, day: subgroupArray.days[i + (7 * (weekNumber - 1))]}}/></td>)
        return <tr>{subGroupDOMsArray}</tr>
    }

    GroupDOMs(groupArray, weekNumber)
    {
        let groupDOMsArray = [];
        for (let i = 0; i < groupArray.subgroups.length; i++)
            groupDOMsArray.push (this.SubGroupDOMs(groupArray.subgroups[i], weekNumber))
        return groupDOMsArray;
    }

    Week(weekNumber)
    {
        return(
            <table>
                <tbody>
                <tr><th colSpan={7} className={'week'}>Week {weekNumber}</th></tr>
                <tr>
                    <th>M</th>
                    <th>T</th>
                    <th>W</th>
                    <th>R</th>
                    <th>F</th>
                    <th>S</th>
                    <th>U</th>
                </tr>
                {this.GroupDOMs(this.state.groups[0],weekNumber)}
                {this.GroupDOMs(this.state.groups[1],weekNumber)}
                {this.GroupDOMs(this.state.groups[2],weekNumber)}
                {this.GroupDOMs(this.state.groups[3],weekNumber)}
                {this.GroupDOMs(this.state.groups[4],weekNumber)}
                <tr>
                    <th>M</th>
                    <th>T</th>
                    <th>W</th>
                    <th>R</th>
                    <th>F</th>
                    <th>S</th>
                    <th>U</th>
                </tr>
                <tr><th colSpan={7} className={'week'}>Week {weekNumber}</th></tr>
                </tbody>
            </table>);
    }

    Month(monthNumber)
    {
        return(
            <section className={'month'}>
                <h2>Month {monthNumber}</h2>
                <section className={'weeks'}>
                    {this.Week(1)}
                    {this.Week(2)}
                    {this.Week(3)}
                    {this.Week(4)}
                </section>
                <h2>Month {monthNumber}</h2>
            </section>)
    }


    SubgroupLabel(details)
    {
        let detailsTemp = Object.assign({},details);
        detailsTemp.subgroup = detailsTemp.subgroup.replace(/_/g, " ");

        return(
            <li onMouseEnter={()=>this.props.StateHandlerPage({isShowDetails: true, stateDetails: detailsTemp})}>
                - {detailsTemp.subgroup}
            </li>
        )
    }

    SubgroupLabels()
    {
        let groups = this.state.groups;
        let groupsArray = [];
        for (let i = 0 ; i < groups.length; i++)
        {
            let subgroupArray = [];
            for (let ii = 0 ; ii < groups[i].subgroups.length; ii++)
                subgroupArray.push(this.SubgroupLabel(groups[i].subgroups[ii]));

            groupsArray.push(<ul className={groups[i].subgroups[0].group}
                                 onMouseLeave={()=>this.props.StateHandlerPage({isShowDetails: false})}>{subgroupArray}</ul>);
        }

        return(
            <section className={'subgroup-labels'}>
                {groupsArray}
            </section>)
    }

    render()
    {
        return [
            <aside id={'labels'}>
                {this.SubgroupLabels()}
            </aside>,
            <section id={'overview'}>
                {this.Month(1)}
                {this.Month(2)}
                {this.Month(3)}
                {this.Month(4)}
            </section>]

    }
}
export default DailyHabitsOverview;

class CustomCheckBox extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = this.props.state;
        this.StateHandlerLocal = this.StateHandlerLocal.bind(this);
        this.CheckBoxState = this.CheckBoxState.bind(this);
    }

    StateHandlerLocal(newState)
    {
        this.setState(newState)
    }

    CheckBoxState()
    {
        for (let i = 0 ; i < this.state.options.length; i++)
        {
            if (i < this.state.options.length - 1)
                if (this.state.day.status === this.state.options[i])
                {
                    this.setState({day: {status: this.state.options[i+1]}});
                    break;
                }
            else
                this.setState({day: {status: this.state.options[0]}});
        }
    }

    render()
    {
        return(<button className={'checkbox-custom ' + this.state.group + " " + this.state.subgroup + ' ' + this.state.day.status}
                       onClick={this.CheckBoxState}/>)
    }


}