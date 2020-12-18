import React from "react";
import CryptoCard from './CryptoCard';



class Ticker extends React.Component {
  constructor(props){
    super(props)
  
  this.state = {
    BTCprice: "",
    BTC7dayChange: "",
    BTCmarketCap: "",
    ETHprice: "",
    ETH7dayChange: "",
    ETHmarketCap: "",
    XRPprice: "",
    XRP7dayChange: "",
    XRPmarketCap: "",
    BCHprice: "",
    BCH7dayChange: "",
    BCHmarketCap: ""
    };
  }
    //after component mounts get the data, and update it periodically
  componentDidMount() {
    this.getData();
    this.updateInfo();
  }

  //What is actully seen on the screen
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4"></div>
        <CryptoCard
        name = "Bitcoin"
        price = {this.state.BTCprice}
        sevenDayChange = {this.state.BTC7dayChange}
        marketCap = {this.state.BTCmarketCap}
        nameColor = "text-success"
        />
        </div>
        <div className="row">
        <CryptoCard
        name = "Ethereum"
        price = {this.state.ETHprice}
        sevenDayChange = {this.state.ETH7dayChange}
        marketCap = {this.state.ETHmarketCap}
        />
        <CryptoCard
        name = "Ripple"
        price = {this.state.XRPprice}
        sevenDayChange = {this.state.XRP7dayChange}
        marketCap = {this.state.XRPmarketCap}
        />
        <CryptoCard
        name = "Bitcoin Cash"
        price = {this.state.BCHprice}
        sevenDayChange = {this.state.BCH7dayChange}
        marketCap = {this.state.BCHmarketCap}
        />
        </div>
      </div>
    );
  }
 

  //Request to Coinmarketcap API to get Cryptocurrency information
  getData = () => {
    const rp = require("request-promise");
    const requestOptions = {
      method: "GET",
      uri:
        "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      qs: {
        start: "1",
        limit: "50",
        convert: "USD",
      },
      headers: {
        "Access-Control-Allow-Origin": "*",
        "X-CMC_PRO_API_KEY": "2ac9ef9a-06f2-4a4e-9f5e-ef19c0c9d1d6",
      },
      json: true,
      gzip: true,
    };

    rp(requestOptions)
      .then((response) => {
        console.log("API call response:", response);
        

        this.setState({
          BTCprice: response.data[0].quote.USD.price.toFixed(2),
          BTC7dayChange: response.data[0].quote.USD.percent_change_7d.toFixed(2),
          BTCmarketCap: response.data[0].quote.USD.market_cap.toFixed(0),
          ETHprice: response.data[1].quote.USD.price.toFixed(2),
          ETH7dayChange: response.data[1].quote.USD.percent_change_7d.toFixed(2),
          ETHmarketCap: response.data[1].quote.USD.market_cap.toFixed(0),
          XRPprice: response.data[2].quote.USD.price.toFixed(3),
          XRP7dayChange: response.data[2].quote.USD.percent_change_7d.toFixed(2),
          XRPmarketCap: response.data[2].quote.USD.market_cap.toFixed(0),
          BCHprice: response.data[5].quote.USD.price.toFixed(2),
          BCH7dayChange: response.data[5].quote.USD.percent_change_7d.toFixed(2),
          BCHmarketCap: response.data[5].quote.USD.market_cap.toFixed(0),
        });
      })
      .catch((err) => {
        console.log("API call error:", err.message);
      });
    console.log(this.state);
  };

  //

  updateInfo = () => {
    var dataFunction = this.getData;
    
    setInterval(function(){dataFunction()}, 30000)
  }

  //this function will be called along with an API call to periodically get and store price data
  // pushPriceToArray = () => {
  //   //new variable equal to the current data set, making it easy to add to
  //   var data = this.state.dataSet;

  //   //necessary for the first 24 data entries
  //   if(data.length < 24){
  //     data.push(this.state.price)
  //     this.setState({dataSet: data})
  //   }
  //   else{
  //     //use this for everything after 24 entries, removes the oldest entry, and adds the newest
  //     data.shift();
  //     data.push(this.state.price);
  //     this.setState({
  //       dataSet: data
  //     })
  //   }
  // }
}



export default Ticker;
