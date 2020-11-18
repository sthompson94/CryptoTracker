import React from "react";

class Chart extends React.Component {
  state = {
    crypto: "",
    price: "",
  };
  componentDidMount() {
    this.getData();
    this.updateInfo();
  }

  render() {
    return (
      <div>
        <h1>{this.state.crypto}:</h1>
        <h2>{this.state.price}</h2>
      </div>
    );
  }

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
      })
      .catch((err) => {
        console.log("API call error:", err.message);
      });
    console.log(this.state);
  };

  updateInfo = () => {
    var dataFunction = this.getData;
    setInterval(function(){dataFunction()}, 300000)
  }
}

export default Chart;
