import React, { Fragment } from 'react';
// import CoviHack_Schedule from './CoviHack_Schedule';
// import Covihack_Tracks from "./Covihack_Tracks";
// import Covihack_Sponsors from "./Covihack_Sponsors";
import Covihack_Header from './Covihack_Header';
// import Covihack_Events from './Covihack_Events'
// import Covihack_Prizes from './Covihack_Prizes';
// import Covihack_MPrizes from './Covihack_MPrizes';

const CoviHack = () => {
    return (
        <Fragment >
            <div className="covihack-page" style={{overflow:"hidden"}}>
            <Covihack_Header/>
            {/* <CoviHack_Schedule/>
            <Covihack_Events/>
            <Covihack_Tracks />
            <Covihack_MPrizes/>
            <Covihack_Prizes/>
            <Covihack_Sponsors /> */}
            </div>
        </Fragment>
    )
}

export default CoviHack
