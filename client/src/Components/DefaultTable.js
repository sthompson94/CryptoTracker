import React from "react";

class DefaultTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      firstprice: "",
      firstMarketCap: "",
      first1dayChange: "",
      secondName: "",
      secondprice: "",
      secondMarketCap: "",
      second1dayChange: "",
      thirdName: "",
      thirdprice: "",
      thirdMarketCap: "",
      third1dayChange: "",
      fourthName: "",
      fourthprice: "",
      fourthMarketCap: "",
      fourth1dayChange: "",
    };
  }

  //after component mounts get the data, and update it periodically
  componentDidMount() {
    this.getData();
    this.updateInfo();
  }

  //Request to backend server
  getData = () => {
    fetch("/api/cryptos")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          firstName: data[0].name,
          firstprice: this.formatNumber(data[0].priceUsd.toFixed(2)),
          firstMarketCap: this.abreviateNumber(data[0].marketCapUsd),
          firstSupply: this.abreviateNumber(data[0].supply),
          first1dayChange: data[0].changePercent24Hr.toFixed(2),
          secondName: data[1].name,
          secondprice: this.formatNumber(data[1].priceUsd.toFixed(2)),
          secondMarketCap: this.abreviateNumber(data[1].marketCapUsd),
          secondSupply: this.abreviateNumber(data[1].supply),
          second1dayChange: data[1].changePercent24Hr.toFixed(2),
          thirdName: data[2].name,
          thirdprice: this.formatNumber(data[2].priceUsd.toFixed(2)),
          thirdMarketCap: this.abreviateNumber(data[2].marketCapUsd),
          thirdSupply: this.abreviateNumber(data[2].supply),
          third1dayChange: data[2].changePercent24Hr.toFixed(2),
          fourthName: data[3].name,
          fourthprice: this.formatNumber(data[3].priceUsd.toFixed(2)),
          fourthMarketCap: this.abreviateNumber(data[3].marketCapUsd),
          fourthSupply: this.abreviateNumber(data[3].supply),
          fourth1dayChange: data[3].changePercent24Hr.toFixed(2),
        })
      );
  };

  //function for updating the displayed data
  updateInfo = () => {
    var dataFunction = this.getData;

    setInterval(function () {
      dataFunction();
    }, 15000);
  };

  //Number formatting, adds commas for large numbers
  formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  // abreviates extremely large numbers, Billions get a B, Trillions get a T
  abreviateNumber = (num) => {
    if (num >= 1000000 && num < 1000000000) {
      num = (num / 1000000).toFixed(2);
      num = num.toString() + "M";
    }
    if (num >= 1000000000 && num < 1000000000000) {
      num = (num / 1000000000).toFixed(2);
      num = num.toString() + "B";
    }
    if (num >= 1000000000000) {
      num = (num / 1000000000000).toFixed(2);
      num = num.toString() + "T";
    }
    return num;
  };

  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Market Cap</th>
              <th scope="col">Supply</th>
              <th scope="col">24 Hr Change</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{this.state.firstName}</th>
              <td>${this.state.firstprice}</td>
              <td>${this.state.firstMarketCap}</td>
              <td>${this.state.firstSupply}</td>
              <td>{this.state.first1dayChange}%</td>
            </tr>
            <tr>
              <th scope="row">{this.state.secondName}</th>
              <td>${this.state.secondprice}</td>
              <td>${this.state.secondMarketCap}</td>
              <td>${this.state.secondSupply}</td>
              <td>{this.state.second1dayChange}%</td>
            </tr>
            <tr>
              <th scope="row">{this.state.thirdName}</th>
              <td>${this.state.thirdprice}</td>
              <td>${this.state.thirdMarketCap}</td>
              <td>${this.state.thirdSupply}</td>
              <td>{this.state.third1dayChange}%</td>
            </tr>
            <tr>
              <th scope="row">{this.state.fourthName}</th>
              <td>${this.state.fourthprice}</td>
              <td>${this.state.fourthMarketCap}</td>
              <td>${this.state.fourthSupply}</td>
              <td>{this.state.fourth1dayChange}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default DefaultTable;
