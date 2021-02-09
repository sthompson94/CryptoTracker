import React from "react";
import CryptoCard from './CryptoCard';



class Ticker extends React.Component {
  constructor(props){
    super(props)
  
  this.state = {
    firstName: "",
    firstprice: "",
    first7dayChange: "",
    first1dayChange: "",
    secondName: "",
    secondprice: "",
    second7dayChange: "",
    second1dayChange: "",
    thirdName: "",
    thirdprice: "",
    third7dayChange: "",
    third1dayChange: "",
    fourthName: "",
    fourthprice: "",
    fourth7dayChange: "",
    fourth1dayChange: ""
    };
  }
    //after component mounts get the data, and update it periodically
  componentDidMount() {
    this.getData();
    // this.updateInfo();
  }

  //What is actully seen on the screen
  render() {
    return (
      <div>
        <div className="row">
          
          
        <CryptoCard
        name = {this.state.firstName}
        price = {this.state.firstprice}
        sevenDayChange = {this.state.first7dayChange}
        oneDayChange = {this.state.first1dayChange}
        nameColor = "text-success"
        classes = "col-sm-12 cryptocard mx-auto"
        />
        </div>
        <div className="row">
        <CryptoCard
        name = {this.state.secondName}
        price = {this.state.secondprice}
        sevenDayChange = {this.state.second7dayChange}
        oneDayChange = {this.state.second1dayChange}
        classes = "col-sm-4 cryptocard"
        />
        <CryptoCard
        name = {this.state.thirdName}
        price = {this.state.thirdprice}
        sevenDayChange = {this.state.third7dayChange}
        oneDayChange = {this.state.third1dayChange}
        classes = "col-sm-4 centerCard cryptocard"
        />
        <CryptoCard
        name = {this.state.fourthName}
        price = {this.state.fourthprice}
        sevenDayChange = {this.state.fourth7dayChange}
        oneDayChange = {this.state.fourth1dayChange}
        classes = "col-sm-4 cryptocard"
        />
        </div>
      </div>
    );
  }
 

  //Request to Coin1dayChange API to get Cryptocurrency information
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
          first1dayChange: response.data[0].quote.USD.percent_change_24h.toFixed(2),
          secondName: response.data[1].name,
          secondprice: response.data[1].quote.USD.price.toFixed(2),
          second7dayChange: response.data[1].quote.USD.percent_change_7d.toFixed(2),
          second1dayChange: response.data[1].quote.USD.percent_change_24h.toFixed(2),
          thirdName: response.data[2].name,
          thirdprice: response.data[2].quote.USD.price.toFixed(3),
          third7dayChange: response.data[2].quote.USD.percent_change_7d.toFixed(2),
          third1dayChange: response.data[2].quote.USD.percent_change_24h.toFixed(2),
          fourthName: response.data[3].name,
          fourthprice: response.data[3].quote.USD.price.toFixed(2),
          fourth7dayChange: response.data[3].quote.USD.percent_change_7d.toFixed(2),
          fourth1dayChange: response.data[3].quote.USD.percent_change_24h.toFixed(2),
        });
      })
      .catch((err) => {
        console.log("API call error:", err.message);
      });
    console.log(this.state);
  };

  

  updateInfo = () => {
    var dataFunction = this.getData;
    
    setInterval(function(){dataFunction()}, 20000)
  }
}



export default Ticker;