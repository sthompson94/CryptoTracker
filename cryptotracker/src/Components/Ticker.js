import React from "react";
import CryptoCard from './CryptoCard';
import Timer from './Timer'



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
    fourth1dayChange: "",
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
      <div>
        <div className="row">
          {/* <Timer/> */}
          
          
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
        "http://localhost:3001/api/cryptos",
    };

    rp(requestOptions)
      .then((response) => {
        console.log("API call response:", JSON.parse(response));
        var results = JSON.parse(response);
        
          //grab the data from the API call response and assign propper variables to propper data
        this.setState({
          firstName: results[0].name,
          firstprice: results[0].quote.USD.price.toFixed(2),
          first7dayChange: results[0].quote.USD.percent_change_7d.toFixed(2),
          first1dayChange: results[0].quote.USD.percent_change_24h.toFixed(2),
          secondName: results[1].name,
          secondprice: results[1].quote.USD.price.toFixed(2),
          second7dayChange: results[1].quote.USD.percent_change_7d.toFixed(2),
          second1dayChange: results[1].quote.USD.percent_change_24h.toFixed(2),
          thirdName: results[2].name,
          thirdprice: results[2].quote.USD.price.toFixed(3),
          third7dayChange: results[2].quote.USD.percent_change_7d.toFixed(2),
          third1dayChange: results[2].quote.USD.percent_change_24h.toFixed(2),
          fourthName: results[3].name,
          fourthprice: results[3].quote.USD.price.toFixed(2),
          fourth7dayChange: results[3].quote.USD.percent_change_7d.toFixed(2),
          fourth1dayChange: results[3].quote.USD.percent_change_24h.toFixed(2),
        });
      })
      //if theres an error, display the error in the console
      .catch((err) => {
        console.log("API call error:", err.message);
      });
    // console.log(this.state);
  };

  
//function for updating the displayed data
  updateInfo = () => {
    var dataFunction = this.getData;
    
    setInterval(function(){dataFunction()}, 30000)
  }
}



export default Ticker;
