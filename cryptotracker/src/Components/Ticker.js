import React from "react";
import CryptoCard from './CryptoCard';



class Ticker extends React.Component {
  constructor(props){
    super(props)
  
  this.state = {
    firstName: "",
    firstprice: "",
    first7dayChange: "",
    firstmarketCap: "",
    secondName: "",
    secondprice: "",
    second7dayChange: "",
    secondmarketCap: "",
    thirdName: "",
    thirdprice: "",
    third7dayChange: "",
    thirdmarketCap: "",
    fourthName: "",
    fourthprice: "",
    fourth7dayChange: "",
    fourthmarketCap: ""
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
        name = {this.state.firstName}
        price = {this.state.firstprice}
        sevenDayChange = {this.state.first7dayChange}
        marketCap = {this.state.firstmarketCap}
        nameColor = "text-success"
        />
        </div>
        <div className="row">
        <CryptoCard
        name = {this.state.secondName}
        price = {this.state.secondprice}
        sevenDayChange = {this.state.second7dayChange}
        marketCap = {this.state.secondmarketCap}
        />
        <CryptoCard
        name = {this.state.thirdName}
        price = {this.state.thirdprice}
        sevenDayChange = {this.state.third7dayChange}
        marketCap = {this.state.thirdmarketCap}
        />
        <CryptoCard
        name = {this.state.fourthName}
        price = {this.state.fourthprice}
        sevenDayChange = {this.state.fourth7dayChange}
        marketCap = {this.state.fourthmarketCap}
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
        "X-CMC_PRO_API_KEY": process.env.REACT_APP_API_KEY,
      },
      json: true,
      gzip: true,
    };

    rp(requestOptions)
      .then((response) => {
        console.log("API call response:", response);
        

        this.setState({
          firstName: response.data[0].name,
          firstprice: response.data[0].quote.USD.price.toFixed(2),
          first7dayChange: response.data[0].quote.USD.percent_change_7d.toFixed(2),
          firstmarketCap: response.data[0].quote.USD.market_cap.toFixed(0),
          secondName: response.data[1].name,
          secondprice: response.data[1].quote.USD.price.toFixed(2),
          second7dayChange: response.data[1].quote.USD.percent_change_7d.toFixed(2),
          secondmarketCap: response.data[1].quote.USD.market_cap.toFixed(0),
          thirdName: response.data[2].name,
          thirdprice: response.data[2].quote.USD.price.toFixed(3),
          third7dayChange: response.data[2].quote.USD.percent_change_7d.toFixed(2),
          thirdmarketCap: response.data[2].quote.USD.market_cap.toFixed(0),
          fourthName: response.data[3].name,
          fourthprice: response.data[3].quote.USD.price.toFixed(2),
          fourth7dayChange: response.data[3].quote.USD.percent_change_7d.toFixed(2),
          fourthmarketCap: response.data[3].quote.USD.market_cap.toFixed(0),
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
    
    setInterval(function(){dataFunction()}, 20000)
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
