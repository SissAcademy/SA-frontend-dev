import React from 'react'
import {withRouter} from "react-router-dom";
import store, {ReducerRoot} from '../store'
import AcademyHeader from './academy-header'
import AcademyFooter from './academy-footer'
import imageGirlInGrass from '../../images/welcome/mini-girl-in-grass.jpg'
import imageGirlElegant from '../../images/welcome/mini-girl-elegant.jpg'
import imageGirlNudePanties from '../../images/welcome/mini-girl-nude-panties.jpg'

class TakeTour extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
    }

    TourMenu()
    {
        return(
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
            </section>)
    }

    AcademyProgram()
    {
        return(
            <article className={'academy-promo-big academy-promo-big--type-B academy-promo-big--explore'}>
                <h1 className={'academy-promo-big__header'}>Enroll now</h1>
                <p className={'academy-promo-big__starting-phrase'}>
                    Explore feminization in a positive way
                </p>
                <p>
                    The Sissification Academy's free, yearlong program guides you through what it means to live and
                    embrace life as a beautiful, desirable girl.
                </p>
                <p>
                    If you are homophobic, close minded or easily offended by sexual exploration then this is not for you.
                </p>
                <p>
                    Many students have told us how their studies quickly made them feel more confident with their
                    feminine feelings and more aware of their own sensuality and sexuality. This leads to a stronger
                    connection to their submissive nature and feminine desires.
                </p>
                <p>
                    While we let all our sissies progress at their own pace, our aim is to get every sissy to eventually realise
                    that full, complete and lifelong sissification is in their own best interest.
                </p>
                <p>
                    If you have doubts during your studies, you can drop out at any time and there are no permanent
                    physical changes until you start the medical intervention track, which would then finalize your
                    transformation if you have made up your mind.
                </p>
                <p>
                    Even if you do not end up living the rest of your life as a girl this program will be beneficial to you in many ways.
                </p>
                <p>
                    Many students report their joy of life increase, they feel more rested, more confident, and less shameful
                    about themselves. This in turn makes them more open, warm and caring of others, regardsless of differences.
                </p>
                <p>
                    Many students end up improving their current relationships if it proves right for them, others finally
                    find a new partner, or become owned full time by a Mistress or Master.
                </p>
                <p>
                    So what is the Academy like? Best way to find out is to try for a bit. You get a mixture of educational content,
                    tasks to perform, we start you on some daily habits, some hypnotic conditioning and so forth.
                </p>
                <p>
                    As you progress you will have the oppertunity to build a major in one of our sissy career tracks.
                    There are tons more to explore but we will take the details later.
                </p>
                <p>
                    If this sounds like it could be interesting for you, then:
                </p>
                <a className={'button button--no-border'} href={'/application'}>
                    Enroll now
                </a>
            </article>)
    }

    BehaviourPlatform()
    {
        return(
            <article className={'academy-promo-big academy-promo-big--type-B academy-promo-big--behaviour'}>
                <h1 className={'academy-promo-big__header'}>Enroll now</h1>
                <p className={'academy-promo-big__starting-phrase'}>
                    Use the Academy to provide powerful structure and control for your sissy training regimen
                </p>
                <p>
                    We are sure you are already sold on the benefits of a sissified husband, partner, slave or toy.
                </p>
                <p>
                    Who would not want more compassion, willingness, and devotion in their life? Combined with more beauty for the eyes,
                    a more pleasurable scent and softer to the touch.
                </p>
                <p>
                    The Sissification Academy was built for mass training though a self-study training program in mind.
                    We have some functions to quickly look over student profiles, and to notify us when a student is struggling for example.
                </p>
                <p>
                    However we know that our tools can be used effectivly by other as well since it allows for things such as daily-checkins,
                    mandatory log keeping of sleep, releases, chastity, hypnosis, chores, rituals, study assignments or videos watched. The Academy also provides a neat way to structure a wardrobe, beauty products and toys. All with high levels of privacy and anonymity.
                </p>
                <p>
                    With control mode you get insight into what your own group does, just like our staff can do with all in the student group.
                    You can also get individual insight into those in your group. The tool works great if used to prepare sessions
                    and to get direct feeback during them, especially if remote. Plus our interface is cute, easy and smooth
                    to use which brings technological friction to a minimum.
                </p>
                <p>
                    If this seems valuable to you, do let us know!
                </p>
                <p>
                    We are still working out a good business around this, so if you are among the first interested it is very possible
                    we are willing to get you access for feedback on your usage that would help in figuring out what needs to improve
                    and what features are desirable to be added next.
                </p>
                <p>
                    Our goal with the Academy is not just to build a training tool, but also a happy thriving community.
                </p>
                <p>
                    If this peeks your mind, then please do get in touch!
                </p>
                <a className={'button button--no-border'}>
                    Get in touch
                </a>
            </article>)
    }

    CampusPlatform()
    {
        return(
            <article className={'academy-promo-big academy-promo-big--type-B academy-promo-big--campus'}>
                <h1 className={'academy-promo-big__header'}>Enroll now</h1>
                <p className={'academy-promo-big__starting-phrase'}>
                    What our training platform is all about
                </p>
                <p>
                    No, there is not some super inteligent AI controlling things, maybe one day ;)
                </p>
                <p>
                    We use a combination of design and psycology to maximize the curiosity and pleasure of the student
                    while making those energy demanding “willpower decisions”play less of a role.
                </p>
                <p>
                    So instead of giving you a list of instructions and a due date a month from now, we instead hand you
                    the list bit by bit as you go through it. Just login and follow. Plus we stack incentives to stay on track.
                </p>
                <p>
                    The most common question we get is around personalization: What if I cannot login every day? or only on weekends?
                    my country does not have X? only at night? vacation coming up? avoid certain sexual content? more hardcore?  
                    The academy is designed with a global and diverse audience in mind.
                </p>
                <p>
                    <b>How is it to study at the Academy? </b><br/>
                    Let us say you are doing the “Feminine Mindset I” course, then you might be asked to read a text about feminism,
                    listen to some steriotypically feminine music, watch a movie or two, change up your morning and bathroom routines a bit for a week.
                    Perhaps consider how big budget you would need to spend on fashion and beauty each month?
                    And the course might end (could be days or months later) with a short quiz exam.
                </p>
                <p>
                    Another course like “Feminine walking I” might instead include a few practice sessions, watch a few instruction videos,
                    collect some clips of walking styles you like, take your own practice walks a few times, maybe even do some stretching,
                    all ending with a longer walk session where you play an audio that gives you special instructions and extra awareness.
                </p>
                <p>
                    We try to make preferances to be optional so you can tailor your training to your comforts.
                </p>
                <div>
                <a className={'button button--no-border'} href={'/application'}>
                    Enroll now
                </a>
                <a className={'button button--border'}>
                    Ask us more
                </a>
                </div>

            </article>)
    }

    Content()
    {
        switch (window.location.pathname + window.location.hash)
        {
            case "/tour":
                return this.TourMenu();
            case "/tour#academy_program":
                return this.AcademyProgram();
            case "/tour#behavior_adjustment_platform":
                return this.BehaviourPlatform();
            case "/tour#campus_platform":
                return this.CampusPlatform();
        }
    }

    render()
    {
        console.log(store.getState());
        return (
            <div className="page welcome-page">
                <AcademyHeader/>
                <main>
                    <h1 className={'main-header'}>
                        <span className={'main-header__row-one'}>TAKE A</span><br/>
                        <span className={'main-header__row-two'}>TOUR</span>
                    </h1>
                    {this.Content()}
                </main>
                <AcademyFooter/>
            </div>)
    }
}

export default withRouter(TakeTour);