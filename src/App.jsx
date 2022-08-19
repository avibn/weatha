import "./App.css";
import WeatherWidget from "./components/WeatherWidget";

function App() {
  return (
    <>
      <div className="background-image">
        <div className="main-page">
          <div className="section-main-weather">
            <h1>weatha</h1>
            <WeatherWidget />
          </div>
          <div className="section-weather-info"></div>
        </div>
      </div>
    </>
  );
}

export default App;
