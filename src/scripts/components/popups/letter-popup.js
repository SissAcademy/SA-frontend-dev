import React     from 'react'
import Spinner   from '../spinner'
import emptyIcon from '../../../images/activity/empty.png'
import starIcon  from '../../../images/activity/star.png'

export default class LetterPopup extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {showSelf: true}
    }

    render()
    {
        return(
            this.state.showSelf ?
            <section id={"letter-popup"} className={'popup-container'}>
                <div className={'background-toggle'} onClick={()=>this.setState({showSelf: !this.state.showSelf})}/>
                <section className={'popup-main'}>
                    <p className={'login-hint'}>
                        Each day you login you will gain an activity point.
                        You will lose them over time when inactive.
                    </p>
                    <button className={'letter-link'}>open letter</button>
                    <h3>weekly activity</h3>
                    <section>
                        <ul>
                            <li><img className={'done'} src={""}/></li>
                            <li><img className={'failed'} src={""}/></li>
                            <li><img className={'current'} src={""}/></li>
                            <li><img className={'empty'} src={emptyIcon}/></li>
                            <li><img className={'empty'} src={emptyIcon}/></li>
                            <li><img className={'empty'} src={emptyIcon}/></li>
                            <li><img className={'star'} src={starIcon}/></li>
                        </ul>
                        <p>bla bla days to get an activity star this period!</p>
                    </section>
                </section>
            </section> : null
        )
    }
}