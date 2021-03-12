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
        oneDayChange = {this.state.first1dayChange}
        nameColor = "text-success"
        classes = "col-sm-12 cryptocard mx-auto"
        />
        </div>
        <div className="row">
        <CryptoCard
        name = {this.state.secondName}
        price = {this.state.secondprice}
        oneDayChange = {this.state.second1dayChange}
        classes = "col-sm-4 cryptocard"
        />
        <CryptoCard
        name = {this.state.thirdName}
        price = {this.state.thirdprice}
        oneDayChange = {this.state.third1dayChange}
        classes = "col-sm-4 centerCard cryptocard"
        />
        <CryptoCard
        name = {this.state.fourthName}
        price = {this.state.fourthprice}
        oneDayChange = {this.state.fourth1dayChange}
        classes = "col-sm-4 cryptocard"
        />
        </div>
      </div>
    );
  }
 

  //Request to backend server
  getData = () => {
    fetch('/api/cryptos')
  .then(response => response.json())
  .then(data => 

    
    
    this.setState({
      firstName: data[0].name,
      firstprice: data[0].priceUsd.toFixed(2),
      first1dayChange: data[0].changePercent24Hr.toFixed(2),
      secondName: data[1].name,
      secondprice: data[1].priceUsd.toFixed(2),
      second1dayChange: data[1].changePercent24Hr.toFixed(2),
      thirdName: data[2].name,
      thirdprice: data[2].priceUsd.toFixed(2),
      third1dayChange: data[2].changePercent24Hr.toFixed(2),
      fourthName: data[3].name,
      fourthprice: data[3].priceUsd.toFixed(2),
      fourth1dayChange: data[3].changePercent24Hr.toFixed(2),
      testVar: "I like cupcakes"
    })
    );
  };

  
//function for updating the displayed data
  updateInfo = () => {
    var dataFunction = this.getData;
    
    setInterval(function(){dataFunction()}, 10000)
  }
}



export default Ticker;
