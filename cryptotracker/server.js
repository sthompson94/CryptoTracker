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
//Api call to Coinmarket Cap
axios({
  method: "GET",
  url: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest/",
  qs: {
    start: "1",
    limit: "50",
    convert: "USD",
  },
  headers: {
    "X-CMC_PRO_API_KEY": process.env.REACT_APP_API_KEY,
  },
  
})
.then(function(res){
  console.log(res.data.json())
})
.catch(function(err){
  console.log(err);
})
  console.log("Hit backend")
})



// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
