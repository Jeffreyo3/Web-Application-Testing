import React from 'react';

function Display (props) {


    return (
        <div className="display-container">
            <h2>Balls</h2>
            <h4>{props.balls}</h4>

            <h2>Strikes</h2>
            <h4>{props.strikes}</h4>
        </div>
    );
};


export default Display;