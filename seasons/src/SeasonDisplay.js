import './SeasonDisplay.css'
import React from 'react';

let seasonConfig = {
    summer: {
        text: 'It is summer now',
        iconName: 'sun'
    },
    winter: {
        text: 'It is winter',
        iconName: 'snowflake'
    }
};

let season = (lat) => {
    let month = new Date().getMonth();

    if (lat > 0) {
        return 3 <= month && month <= 8 ? 'summer' : 'winter';
    } else {
        return 3 <= month && month <= 8 ? 'winter' : 'summer';
    }
};

let SeasonDisplay = (props) => {
    let {text, iconName} = seasonConfig[season(props.lat)];

    return (
        <div className="season-display">
            <i className={`icon-left massive ${iconName} icon`}></i>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}></i>
        </div>
    );
};

export default SeasonDisplay;