import { useEffect, useState } from "react";
import searchByName, { getIconURL } from "./api/WeatherAPI";
import "./App.css";
import InfoRow from "./components/InfoRow";
import LinkButton from "./components/inputs/LinkButton";
import SearchButton from "./components/inputs/SearchButton";
import TextInput from "./components/inputs/TextInput";
import WeatherSearch from "./components/WeatherSearch";
import WeatherWidget from "./components/WeatherWidget";
import dateFormat from "dateformat";
// import Image from "./assets/cloudy.png";

function App() {
  const [data, setData] = useState({});
  const [query, setQuery] = useState("london");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    searchByName(query)
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setIsLoading(false);
          setError(true);
        }
      });
  }, [query]);

  const searchLocationHandler = (cityName) => {
    setIsLoading(true);
    setQuery(cityName);
  };

  if (isLoading) {
    return (
      <div style={{ backgroundColor: "black" }}>
        <h1>Loading...</h1>
      </div>
    );
  }

  // todo
  if (error) {
    return (
      <div style={{ backgroundColor: "black" }}>
        <h1>Error</h1>
      </div>
    );
  }

  return (
    <>
      <div
        className="background-image"
        // style={{ backgroundImage: "url(" + Image + ")" }}
      >
        <div className="main-page">
          <div className="section-main-weather">
            <h1>weatha</h1>
            <WeatherWidget
              temperature={data.main.temp}
              city={data.name}
              date={data.dt}
              weatherType={getIconURL(data.weather[0].icon)}
            />
          </div>
          <div className="section-weather-info">
            <WeatherSearch searchHandler={searchLocationHandler} />
            <div className="padded-section">
              <div className="text-rows">
                <LinkButton
                  text="Birmingham"
                  onClick={() => searchLocationHandler("Birmingham")}
                />
                <LinkButton
                  text="Manchester"
                  onClick={() => searchLocationHandler("Manchester")}
                />
                <LinkButton
                  text="New York"
                  onClick={() => searchLocationHandler("New York")}
                />
                <LinkButton
                  text="California"
                  onClick={() => searchLocationHandler("California")}
                />
              </div>
            </div>
            <hr />
            <div className="padded-section">
              <p>Weather Details</p>
              <div className="text-rows">
                <InfoRow text="Cloudy" value={`${data.clouds.all}%`} />
                <InfoRow text="Humidity" value={`${data.main.humidity}%`} />
                <InfoRow text="Wind" value={`${data.wind.speed} km/h`} />
                <InfoRow
                  text="Sunrise"
                  value={dateFormat(data.sys.sunrise * 1000, "UTC:h:MM TT Z")}
                />
                <InfoRow
                  text="Sunset"
                  value={dateFormat(data.sys.sunset * 1000, "UTC:h:MM TT Z")}
                />
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
