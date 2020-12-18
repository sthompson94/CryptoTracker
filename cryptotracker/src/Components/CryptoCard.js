import React from 'react';

function CryptoCard(props){
    return(
        <div className="col-sm-4">
            <h1>{props.name}</h1>
            <h2>Current Price: ${props.price}</h2>
        </div>
    )
}

export default CryptoCard;