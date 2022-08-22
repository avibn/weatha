import "./App.css";
import InfoRow from "./components/InfoRow";
import LinkButton from "./components/inputs/LinkButton";
import SearchButton from "./components/inputs/SearchButton";
import TextInput from "./components/inputs/TextInput";
import WeatherWidget from "./components/WeatherWidget";
// import Image from "./assets/cloudy.png";

function App() {
  const onClick = () => {};
  return (
    <>
      <div
        className="background-image"
        // style={{ backgroundImage: "url(" + Image + ")" }}
      >
        <div className="main-page">
          <div className="section-main-weather">
            <h1>weatha</h1>
            <WeatherWidget />
          </div>
          <div className="section-weather-info">
            <div className="location-search">
              <TextInput placeholder="Another location" />
              <SearchButton />
            </div>
            <div className="padded-section">
              <div className="text-rows">
                <LinkButton text="Birmingham" onClick={onClick} />
                <LinkButton text="Manchester" onClick={onClick} />
                <LinkButton text="New York" onClick={onClick} />
                <LinkButton text="California" onClick={onClick} />
              </div>
            </div>
            <hr />
            <div className="padded-section">
              <p>Weather Details</p>
              <div className="text-rows">
                <InfoRow text="Cloudy" value="86%" />
                <InfoRow text="Humidity" value="62%" />
                <InfoRow text="Wind" value="8km/h" />
              </div>
            </div>
            <hr />
            <div className="padded-section">
              <p>Next Days</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
