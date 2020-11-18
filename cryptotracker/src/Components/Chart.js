import React from 'react';

class Chart extends React.Component {

  state = {
    crypto: "",
    price: ""
  }


  render() {
    this.getData();
    return(
      <h1>Hello "World"</h1>
    )
  }


 getData = () => {
    const rp = require('request-promise');
    const requestOptions = {
      method: 'GET',
      uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
      qs: {
        'start': '1',
        'limit': '50',
        'convert': 'USD'
      },
      headers: {
        'X-CMC_PRO_API_KEY': '2ac9ef9a-06f2-4a4e-9f5e-ef19c0c9d1d6'
      },
      json: true,
      gzip: true
    };
    
    rp(requestOptions).then(response => {
      console.log('API call response:', response);

    }).catch((err) => {
      console.log('API call error:', err.message);
    });
}
    
}

export default Chart;