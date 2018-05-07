import React from 'react'
import {withRouter} from "react-router-dom";
import store, {ReducerRoot} from '../store'
import AcademyHeader from './academy-header'
import AcademyFooter from './academy-footer'
import imageGirlInGrass from '../../images/welcome/mini-girl-in-grass.jpg'
import imageGirlElegant from '../../images/welcome/mini-girl-elegant.jpg'
import imageGirlNudePanties from '../../images/welcome/mini-girl-nude-panties.jpg'

class FrondPage extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
        this.StateController = this.StateController.bind(this);
    }

    StateController(newState)
    {
        this.setState(newState);
    }

    render()
    {
        console.log(store.getState());
        return (
            <div className="page welcome-page">
                <AcademyHeader/>
                <main>
                    <h1 className={'main-header'}>
                        <span className={'main-header__row-one'}>SISSIFICATION</span><br/>
                        <span className={'main-header__row-two'}>ACADEMY</span>
                    </h1>
                    <article className={'academy-promo-big academy-promo-big--enroll-now'}>
                        <h1 className={'academy-promo-big__header'}>Enroll now</h1>
                        <p className={'academy-promo-big__starting-phrase'}>
                            Creating beautiful
                            feminine girls
                        </p>
                        <p>
                            The Academy is a well renowned sissyfication
                            program combined with a modern online
                            sissy training platform started 2018.
                        </p>
                        <p>
                            Academy enrollment and the majority
                            of our content is FREE, we also offer
                            premium content and services for
                            those that want even more
                            personalization {"<3"}
                        </p>
                        <a className={'button button--no-border academy-promo-big__button academy-promo-big__button--enroll-now'} href={'/application'}>
                            Enroll now
                        </a>
                    </article>
                    <section className={'academy-small-promos-section'}>
                        <ul className={'academy-small-promos-list'}>
                            <li className={'academy-small-promos-list__list-item'}>
                                <article className={'academy-promo-small'}>
                                    <h1>Want to explore your feminine side?</h1>
                                    <img className={"academy-promo-small__teaser"} src={imageGirlInGrass}/>
                                    <a className={"button button--border academy-promo-small__link"} href={'/tour#academy_program'}>Learn about the academy program</a>
                                </article>
                            </li>
                            <li className={'academy-small-promos-list__list-item'}>
                                <article className={'academy-promo-small'}>
                                    <h1>Want to feminize your partner or toy?</h1>
                                    <img className={"academy-promo-small__teaser"} src={imageGirlElegant}/>
                                    <a className={"button button--border academy-promo-small__link"} href={'/tour#behavior_adjustment_platform'}>Discover our behavior adjustment platform</a>
                                </article>
                            </li>
                            <li className={'academy-small-promos-list__list-item'}>
                                <article className={'academy-promo-small'}>
                                    <h1>Modern AI powered online feminization</h1>
                                    <img className={"academy-promo-small__teaser"} src={imageGirlNudePanties}/>
                                    <a className={"button button--border academy-promo-small__link"} href={'/tour#campus_platform'}>Read about the campus platform</a>
                                </article>
                            </li>
                        </ul>
                    </section>
                </main>
                <AcademyFooter/>
            </div>)
    }
}

export default withRouter(FrondPage);