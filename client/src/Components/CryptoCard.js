import React from "react";

function CryptoCard(props) {
  return (
    <div className={props.classes}>
        <div className="container border border-dark rounded">
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
          <h1 className={props.nameColor}>{props.name}</h1>
          <h2>Current Price: ${props.price}</h2>
        </div>
        <div className="col-sm-1"></div>
      </div>
      <div className="row">
        <div className="col-sm-1"></div>
        <h5 className="col-sm-5">7 day change: {props.sevenDayChange}%</h5>
        <h5 className="col-sm-5">24 hour change: {props.oneDayChange}%</h5>
        <div className="col-sm-1"></div>
      </div>
      </div>
    </div>
  );
}

export default CryptoCard;
