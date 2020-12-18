import React from 'react';

function CryptoCard(props){
    return(
        <div className="border rounded col-sm-4">
            <h1 className={props.nameColor}>{props.name}</h1>
            <h2>Current Price: ${props.price}</h2>
            <div className="row">
                <h4 className="col-sm-6">7 day change: {props.sevenDayChange}%</h4>
                <h4 className="col-sm-6">Market Cap: {props.marketCap}</h4>
            </div>
            
        </div>
    )
}

export default CryptoCard;