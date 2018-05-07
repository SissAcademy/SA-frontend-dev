import React from 'react'
import academyLogo from '../../images/academy-header/academy-logo.png'
import iconReddit from '../../images/reddit.svg'
import iconEmail from '../../images/email.svg'
import iconPatreon from '../../images/patreon.svg'


export default class CLASSNAME extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <footer className={"academy-footer"}>
                <h2 className={'visually-hidden'}>Site footer</h2>
                <p className={'academy-footer__warning'}>
                    For all intents and purposes you should see this site only as a roleplay fantasy.<br/>
                     Only you can know about of your situation and what truly makes you happy.
                </p>
                <div className={'academy-footer__column academy-footer__column--one'}>
                    <div className={"academy__logo"}>
                        <img src={academyLogo}/>
                        <span>Sissification Academy™</span>
                    </div>
                    <p className={'history'}>
                        The Academy is a well renowned sissyfication program
                        combined with an online sissy training platform
                        that we developed on our own using community support, started 2018.
                    </p>
                    <a className={'academy-footer__link'}>Contact the Academy Staff</a>
                    <a className={'academy-footer__link'}>Our approach to feminization</a>
                    <a className={'academy-footer__link'}>Our disclaimer</a>
                    <p className={'copyright'}>
                        Copyright 2018 © Explore, dream create!
                    </p>
                </div>
                <div className={'academy-footer__column academy-footer__column--two'}>
                    <h3>Program details</h3>
                    <ul>
                        <li><a className={'academy-footer__link'}>Program overview</a></li>
                        <li><a className={'academy-footer__link'}>Courses overview</a></li>
                        <li><a className={'academy-footer__link'}>Career overview</a></li>
                    </ul>
                    <h3>Premium content</h3>
                    <ul>
                        <li><a className={'academy-footer__link'}>Explore premium services</a></li>
                        <li><a className={'academy-footer__link'}>Academy Online Shop</a></li>
                        <li><a className={'academy-footer__link'}>Contact support</a></li>
                    </ul>
                </div>
                <div className={'academy-footer__column academy-footer__column--three'}>
                    <h3>Is the Academy for you?</h3>
                    <ul>
                        <li><a className={'academy-footer__link'}>I want to explore feminization!</a></li>
                        <li><a className={'academy-footer__link'}>I want next level sissification!</a></li>
                        <li><a className={'academy-footer__link'}>I want to feminize my boyfriend!</a></li>
                        <li><a className={'academy-footer__link'}>I want feminization training for my willing/unwilling slave.</a></li>
                        <li><a className={'academy-footer__link'}>I want on 24/7 on-site training.</a></li>
                        <li><a className={'academy-footer__link'}>I work as a professional dominant.</a></li>
                        <li><a className={'academy-footer__link'}>I want to live as a girl fulltime.</a></li>
                        <li><a className={'academy-footer__link'}>I am transgender and doing my transition.</a></li>
                    </ul>
                </div>
                <div className={'academy-footer__column academy-footer__column--four'}>
                    <ul>
                        <li><a className={'link-outer link-outer-patreon'} href={"https://www.patreon.com/sissytrainerfrida"}><img src={iconPatreon}/><span>Support the Academy on Patreon</span></a></li>
                        <li><a className={'link-outer link-outer-reddit'} href={"https://www.reddit.com/r/SissificationAcademy/"}><img src={iconReddit}/><span>Sissification Academy’s Reddit Forum</span></a></li>
                        <li>
                            <form className={'link-outer link-outer-signup'}>
                                <img  src={iconEmail}/>
                                <input placeholder={"Our newsletter signup"}/>
                                <button type={"button button--no-border submit"}>SIGNUP</button>
                            </form>
                        </li>
                        <p className={'privacy-note'}>
                            <b>Privacy note</b>: The sissification academy does not keep
                            any identifiable information about you. Your only unique
                            identifier is your annonymous sissy email. Do not ever
                            enter any identifiable information into this site.
                        </p>
                    </ul>
                </div>
            </footer>)
    }
}