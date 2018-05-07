import React from 'react'
import {withRouter} from "react-router-dom";
import store, {ReducerRoot} from '../store'
import AcademyHeader from './academy-header'
import AcademyFooter from './academy-footer'

class ApplicationPage extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
    }

    render()
    {
        console.log(store.getState());
        return (
            <div className="page welcome-page">
                <AcademyHeader/>
                <main>
                    <h1 className={'main-header'}>
                        <span className={'main-header__row-one'}>SUBMIT</span><br/>
                        <span className={'main-header__row-two'}>APPLICATION</span>
                    </h1>
                    <article className={'academy-promo-big academy-promo-big--type-B academy-promo-big--dear-applicant'}>
                        <h1 className={'academy-promo-big__header'}>Scroll down</h1>
                        <p className={'academy-promo-big__starting-phrase'}>
                            Dear applicant,
                        </p>
                        <p>
                            This is your admission form for the Sissification Academy's free, yearlong main program.<br/>
                            If you are homophobic, close minded or not interested in sexual exploration then this is not for you.
                            Here we take sissification to the next level and allow our students to fully explore all aspect of their femininity.
                        </p>
                        <p>
                            Many students have told us how their studies quickly made them feel more confident with their sissy feelings
                            and more aware of their own sensuality and sexuality. This leads to a stronger connection to their submissive nature
                            and feminine desires. While we let all our sissies progress at their own pace, our aim
                            is to get every sissy to realise that full, complete and lifelong sissification is their best bet.
                        </p>
                        <p>
                            If you have doubts during your studies, you can drop out at any time and there are no permanent physical changes
                            until you start the medical intervention track which finalises your transformation.
                        </p>
                        <p>
                            If you proceed far enough you will find a lot of doors opening. Be it either in improving your current relationship,
                            getting a new, more suitable partner or becoming owned full time by a Mistress or Master.
                        </p>
                        <p>
                            Best regards,<br/>
                            The Sissylover Processing and Admission Board 2018
                        </p>
                        <a className={'button button--border'} href={'#submit-application-anchor'}>
                            Scroll down
                        </a>
                    </article>
                    <section className={'academy-promo-big academy-promo-big--type-C'}>
                        <em className={'academy-promo-big--type-C__strong-phrase'}>
                            Reach a new level of giggly happiness and joy by tapping into your feminine personality, sexuality.
                        </em>
                        <div className={'academy-promo-big--type-C__background academy-promo-big--type-C__background--form4'}>
                            <a className={"button button--no-border"} href={'#submit-application-anchor'}>Scroll down</a>
                        </div>
                    </section>
                    <section className={'academy-promo-big academy-promo-big--type-C'}>
                        <em className={'academy-promo-big--type-C__strong-phrase'}>
                            Change your habits once and for all using state-of-the-art conditioning techniques.
                        </em>
                        <div className={'academy-promo-big--type-C__background academy-promo-big--type-C__background--form5'}>
                            <a className={"button button--no-border"} href={'#submit-application-anchor'}>Scroll down</a>
                        </div>
                    </section>
                    <section className={'academy-promo-big academy-promo-big--type-C'}>
                        <em className={'academy-promo-big--type-C__strong-phrase'}>
                            Feminize your mind, body, soul, behaviour, attitude, wardrode and much more.
                            Is this the last sissification program you will ever need?
                        </em>
                        <div className={'academy-promo-big--type-C__background academy-promo-big--type-C__background--bg-girl-headphones'}>
                            <a className={"button button--no-border"} href={'#submit-application-anchor'}>Scroll down</a>
                        </div>
                    </section>
                    <section className={'academy-promo-big academy-promo-big--type-C'}>
                        <em className={'academy-promo-big--type-C__strong-phrase'}>
                            Explore your sexuality and nurture your slutty wild side without humiliation.
                            Curious of anal? sissigasms? chastity?
                        </em>
                        <div className={'academy-promo-big--type-C__background academy-promo-big--type-C__background--form6'}>
                            <a className={"button button--no-border"} href={'#submit-application-anchor'}>Scroll down</a>
                        </div>
                    </section>
                    <section className={'academy-promo-big academy-promo-big--type-C'}>
                        <em className={'academy-promo-big--type-C__strong-phrase'}>
                            The Academy program gives you a structure that pushes you to move forwards,
                            helps you keep your commitments long term.
                        </em>
                        <div className={'academy-promo-big--type-C__background academy-promo-big--type-C__background--form1'}>
                            <a className={"button button--no-border"} href={'#submit-application-anchor'}>Scroll down</a>
                        </div>
                    </section>
                    <section className={'academy-promo-big academy-promo-big--type-D'} id={'submit-application-anchor'}>
                        <em className={'academy-promo-big--type-D__strong-phrase'}>
                            I approve
                        </em>
                        <p>
                            I want to apply for the Academy, I understand I might not be able to resist the Academy conditioning
                            and I am willing to take the slight risk of getting dragged in and ending up living as a slutty, sexy girl,
                            a decision I then might not be able to take back. I understand that for all intents
                            and purposes all content provided are just a fun fantasy roleplay for my entertainment.
                            I am responsible to care and safeguard my own health, safety and reputation att all times.
                            I will under no circumstances enter information into the academy platform that can be used to identify me.
                        </p>
                        <p>
                            I ensure I am sane, of good physical and mental health and happily consent to the Academy doing with me
                            as they wish in order to satiate my curiosity and have a chance for the best sex ever.
                            This also means I accept any risks and side effects from mind control and I allow my mind to be brainwashed and feminized,
                            as well as the eventual complete feminization of my body, in case I choose to progress in the Academy to such a point
                            that I am no longer aware of my own will, which I know might very well be sooner than I think,
                            and that I can be subliminally influenced even now. I fully consent to all of the above, to follow all Academy rules
                            and accept any corrective punishment given for any reason at any time.
                        </p>
                        <p>
                            I understand, I accept, I am of legal age.
                        </p>
                        <label>
                            <input type={'checkbox'}/>
                            {"<—"} Check to approve you have read the text above, accepted all it says and understood it fully.
                        </label>
                        <a>Submit my application</a>
                    </section>
                </main>
                <AcademyFooter/>
            </div>)
    }
}

export default withRouter(ApplicationPage);