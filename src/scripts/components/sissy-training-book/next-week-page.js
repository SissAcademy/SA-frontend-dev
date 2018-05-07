import React         from 'react'
import iconYes from '../../../images/STB/icon_yes.svg'
import iconNo from '../../../images/STB/icon_no.svg'
import iconProcess from '../../../images/STB/icon_process.svg'

let periodExample =
    {
        periodNumber: 5,
        startOfTheDay: "06:30",
        days:
            [
                {date: new Date("2018-04-08"), commitment: 1, progress: 0},
                {date: new Date("2018-04-09"), commitment: 0, progress: 0},
                {date: new Date("2018-04-10"), commitment: 1, progress: 1},
                {date: new Date("2018-04-11"), commitment: 0, progress: null},
                {date: new Date("2018-04-12"), commitment: 1, progress: null},
                {date: new Date("2018-04-13"), commitment: 1, progress: null},
                {date: new Date("2018-04-14"), commitment: 0, progress: null},
            ]
    };

let remidersExample =
    [
        {
            header: "Course Signup Reminder",
            message:"It seems next week you will have " +
            "some time to explore new courses. " +
            "Better sign up in time!",
            link: {text: "Visit courses", href: "#"}
        },
        {
            header: "Punishment!",
            message:"You missed some deadlines for your conditioning. We have prepared correction task for you.",
            link: {text: "OPEN TASK", href: "#"}
        },
        {
            header: "Course Signup Reminder",
            message:"It seems next week you will have " +
            "some time to explore new courses. " +
            "Better sign up in time!",
            link: {text: "Visit courses", href: "#"}
        },
        {
            header: "Punishment!",
            message:"You missed some deadlines for your conditioning. We have prepared correction task for you.",
            link: {text: "OPEN TASK", href: "#"}
        },
    ];


export default class NextWeekPage extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <main className={'STB-sub-page STB-sub-page--next-week'}>
                <h2>today's plan</h2>
                <Period/>
                <Reminders/>
            </main>)
    }
}

class Period extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {showPeriod: true}
    }

    ExpandPeriod()
    {
        return [
            <div className={'table'}>
                <p className={'commitment'}>commitment</p>
                <p className={'progress'}>progress</p>
            </div>,
            <ul className={'table'}>
                {this.PeriodTable(periodExample.days)}
            </ul>,
            <p className={'day-start'}>Your day starts 4  in the morning</p>
        ]
    }

    PeriodTable(days)
    {
        let weekday = [];
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thu";
        weekday[5] = "Fri";
        weekday[6] = "Sat";

        let month = [];
        month[0] = "Jan";
        month[1] = "Feb";
        month[2] = "Mar";
        month[3] = "Apr";
        month[4] = "May";
        month[5] = "Jun";
        month[6] = "Jul";
        month[7] = "Aug";
        month[8] = "Sep";
        month[9] = "Oct";
        month[10] = "Nov";
        month[11] = "Dec";

        let daysList = [];
        days.forEach((day)=>{daysList.push(
            <li>
                <p>{weekday[day.date.getDay()]}</p>
                <p>{month[day.date.getMonth()]} {day.date.getDate()}</p>
                <img src={day.commitment ? iconYes : iconNo}/>
                <img src={day.progress === null ? null : (day.progress ? iconYes : iconProcess)}/>
            </li>)});

        return daysList;
    }

    render()
    {
        return(
            <section className={'period'}>
                <header>
                    <h3>period {periodExample.periodNumber}</h3>
                    <label className={'checkbox-container'}>
                        <input type={'checkbox'} defaultChecked={true} onChange={()=>{this.setState({showPeriod: !this.state.showPeriod})}}/>
                        <span className={'custom-checkbox'}/>
                    </label>
                </header>
                <p className={'commitments-attention'}>You still need to complete your daily commitments.</p>
                {this.state.showPeriod ? this.ExpandPeriod() : null}
            </section>)
    }
}

class Reminders extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    Reminder(reminderObj)
    {
        return(
            <article className={'reminder'}>
                <header>
                    <h1>{reminderObj.header}</h1>
                    <button className={'close'}>X</button>
                </header>
                <p>{reminderObj.message}</p>
                <a href={reminderObj.link.href}>{reminderObj.link.text}</a>
            </article>)
    }

    render()
    {
        let remindersDOM = [];
        remidersExample.forEach((reminder)=>{remindersDOM.push(<li>{this.Reminder(reminder)}</li>)});

        return(
            <section className={'reminders'}>
                <h3>reminders</h3>
                <ul>{remindersDOM}</ul>
            </section>)
    }
}

