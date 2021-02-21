const express = require("express");
// const path = require("path");
const PORT = process.env.PORT || 3001;
const cors = require("cors")
const axios = require("axios");
const app = express();
const dotenv = require("dotenv").config();

// Define middleware here
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// process.env.REACT_APP_API_KEY
// Define API routes here

app.get('/api/cryptos', function(req, res){

    var results;
//Api call to Coinmarket Cap
const rp = require('request-promise');
const requestOptions = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  qs: {
    'start': '1',
    'limit': '4',
    'convert': 'USD'
  },
  headers: {
    'X-CMC_PRO_API_KEY': process.env.REACT_APP_API_KEY
  },
  json: true,
  gzip: true
};

rp(requestOptions).then(response => {
  // console.log(response);
  res.json(response.data);
}).catch((err) => {
  console.log('API call error:', err.message);
});
})

// Send every other request to the React app
// Define any API routes before this runs
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
