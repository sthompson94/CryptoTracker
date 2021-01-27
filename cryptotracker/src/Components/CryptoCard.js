import React from 'react';

function CryptoCard(props){
    return(
        <div className={props.classes}>
            <h1 className={props.nameColor}>{props.name}</h1>
            <h2>Current Price: ${props.price}</h2>
            <div className="row">
                <h5 className="col-sm-6">7 day change: {props.sevenDayChange}%</h5>
                <h5 className="col-sm-6">24 hour change: {props.oneDayChange}%</h5>
            </div>
            
        </div>
    )
}

export default CryptoCard;