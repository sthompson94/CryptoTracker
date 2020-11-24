import React from "react";
import {Line} from 'react-chartjs-2';



class Graph extends React.Component {
  state = {
    crypto: "",
    price: "",
    dataSet:[],
    };

    //after component mounts get the data, and update it periodically
  componentDidMount() {
    this.getData();
    this.updateInfo();
  }

  //What is actully seen on the screen
  render() {
    return (
      <div>
        <h1>{this.state.crypto}:</h1>
        <Line
          data={this.state.dataSet}
          options={{
            title:{
              display:true,
              text:'BTC Price over time',
              fontSize:20,
              width: 600,
              height: 400,
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        <h2>Current Price: {this.state.price}</h2>
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
          crypto: response.data[0].name,
          price: response.data[0].quote.USD.price,
        });
        this.pushPriceToArray();
      })
      .catch((err) => {
        console.log("API call error:", err.message);
      });
    console.log(this.state);
  };

  //

  updateInfo = () => {
    var dataFunction = this.getData;
    
    setInterval(function(){dataFunction()}, 10000)
  }

  //this function will be called along with an API call to periodically get and store price data
  pushPriceToArray = () => {
    //new variable equal to the current data set, making it easy to add to
    var data = this.state.dataSet;

    //necessary for the first 24 data entries
    if(data.length < 24){
      data.push(this.state.price)
      this.setState({dataSet: data})
    }
    else{
      //use this for everything after 24 entries, removes the oldest entry, and adds the newest
      data.shift();
      data.push(this.state.price);
      this.setState({
        dataSet: data
      })
    }
  }
}



export default Graph;