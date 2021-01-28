import React from 'react'


function Banner (){
    return(
        <div className="bg-info banner">
            <h1 className="navbar-text">Live Cryptocurrenty Prices!</h1>
            <ul className="nav nav-pills">
            <li><a className="navbar-brand" href="https://bitcoin.org/en/how-it-works">Learn about Bitcoin</a></li>
            <li><button><a className="navbar-brand" href="https://ethereum.org/en/learn/">Learn about Ethereum</a></button></li>
            </ul>
        </div>
    )
}

export default Banner;