const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const cors = require("cors")
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
// Define API routes here

app.get('/api/cryptos', function(req, res){
//Api call to Coinmarket Cap
const rp = require('request-promise');
const requestOptions = {
  method: 'GET',
  uri: 'https://api.coincap.io/v2/assets',
  qs: {
    ids: "bitcoin,ethereum,litecoin,cardano"
  },
  json: true,
  gzip: true,
};



rp(requestOptions).then(response => {
  console.log(response);

  var numberResponse = [];

  for(var i = 0;i < 4; i++){
    var convertedNums = {
      name: response.data[i].name,
      priceUsd: Number(response.data[i].priceUsd),
      marketCapUsd: Number(response.data[i].marketCapUsd),
      supply: Number(response.data[i].supply),
      changePercent24Hr: Number(response.data[i].changePercent24Hr),

    }
    numberResponse.push(convertedNums)
  }
  res.json(numberResponse);
}).catch((err) => {
  console.log('API call error:', err.message);
});
})

// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "/index.html"));
// });

// Send every other request to the React app
// Define any API routes before this runs

  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
