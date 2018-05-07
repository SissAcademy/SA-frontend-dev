import React from 'react';
import LetterPopup from './popups/letter-popup'

export default class Test extends React.Component
{
    render()
    {
        return(
            <div className={'page'} id={'page-test'}>
                <LetterPopup/>
            </div>
        )
    }
}



/*
<label className="toggle-custom">
    <input type="checkbox"/>
    <span className={'slider round'}/>
</label>
 */