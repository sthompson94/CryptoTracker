import React from 'react';



class DefaultTable extends React.Component{
    constructor(props){
        super(props)


        this.state = {
            firstName: "",
            firstprice: "",
            first1dayChange: "",
            secondName: "",
            secondprice: "",
            second1dayChange: "",
            thirdName: "",
            thirdprice: "",
            third1dayChange: "",
            fourthName: "",
            fourthprice: "",
            fourth1dayChange: "",
        }
    }

          //after component mounts get the data, and update it periodically
  componentDidMount() {
    this.getData();
    this.updateInfo();
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
    })
    );
  };

  
//function for updating the displayed data
  updateInfo = () => {
    var dataFunction = this.getData;
    
    setInterval(function(){dataFunction()}, 10000)
  }


  render(){
      return(
          <div>
              <table className="table table-bordered">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">24hr Change</th>
      <th scope="col">Market Cap</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{this.state.firstName}</th>
      <td>${this.state.firstprice}</td>
      <td></td>
      <td>{this.state.first1dayChange}%</td>
    </tr>
    <tr>
      <th scope="row">{this.state.secondName}</th>
      <td>${this.state.secondprice}</td>
      <td></td>
      <td>{this.state.second1dayChange}%</td>
    </tr>
    <tr>
      <th scope="row">{this.state.thirdName}</th>
      <td>${this.state.thirdprice}</td>
      <td></td>
      <td>{this.state.third1dayChange}%</td>
    </tr>
    <tr>
      <th scope="row">{this.state.fourthName}</th>
      <td>${this.state.fourthprice}%</td>
      <td></td>
      <td>{this.state.fourth1dayChange}5</td>
    </tr>
  </tbody>
</table>
          </div>
      )
  }
  
}


export default DefaultTable;