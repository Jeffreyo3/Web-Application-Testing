import React from 'react';

function Display (props) {


    return (
        <div className="display-container">
            <div className="ball-counter">
            <h2>Balls</h2>
            <h4>{props.balls}</h4>
            </div>

            <div className="strike-counter">
            <h2>Strikes</h2>
            <h4>{props.strikes}</h4>
            </div>
        </div>
    );
};


export default Display;