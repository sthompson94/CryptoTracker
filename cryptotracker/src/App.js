import "./App.css";
import Ticker from "./Components/Ticker";
import Banner from "./Components/Banner";
import Button from "./Components/Button";

// Testing for github

function App() {
  return (
    <div className="App">
      <Banner />
      <div className="container">
        <Ticker />

            <Button
              classes="btn btn-default"
              link="https://bitcoin.org/en/how-it-works"
              text="Learn about Bitcoin"
            />
          
            <Button
              classes="btn btn-default"
              link="https://ethereum.org/en/learn/"
              text="Learn about Ethereum"
            />
            </div>
          </div>
  );
}

export default App;
