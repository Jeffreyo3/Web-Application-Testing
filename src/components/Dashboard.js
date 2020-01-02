import React from 'react';


function Dashboard (props) {


    return (
        <div className="dashboard-container">
            <button onClick={() => props.addBalls()} className="dash-button">Ball</button>
            <button onClick={() => props.addStrikes()} className="dash-button">Strike</button>
            <button onClick={() => props.handleFoul()} className="dash-button">Foul</button>
            <button onClick={() => props.setZero()} className="dash-button">Hit</button>
        </div>
    );
};


export default Dashboard;