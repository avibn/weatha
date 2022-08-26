import { useEffect, useState } from "react";
import searchByName, { getIconURL } from "./api/WeatherAPI";
import InfoRow from "./components/InfoRow";
import LinkButton from "./components/inputs/LinkButton";
import WeatherSearch from "./components/WeatherSearch";
import WeatherWidget from "./components/WeatherWidget";
import dateFormat from "dateformat";
import { useToast } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

import responseTemplates from "./api/responseTemplate.json";
import CustomSkeleton from "./components/CustomSkeleton";
import { getBackgroundImage } from "./helpers/getBackgroundImage";
import "./App.css";

function App() {
  const [data, setData] = useState(responseTemplates);
  const [query, setQuery] = useState("london");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const toast = useToast();

  const currentBackgroundImage = getBackgroundImage(data.weather[0].id || 801);

  useEffect(() => {
    // show loading indicator
    setError(false);
    setIsLoading(true);

    // send the request to the api
    searchByName(query)
      .then((data) => {
        setTimeout(() => {
          setData(data);
          setIsLoading(false);
        }, 1000);
      })
      .catch((error) => {
        // check if location is not found
        if (error.response.status === 404) {
          setTimeout(() => {
            setIsLoading(false);
            setError(true);
          }, 1000);
        }
      });
  }, [query]);

  // show error toast if any error is encountered
  useEffect(() => {
    if (error) {
      toast({
        title: "City not found!",
        description: "Please enter a valid city name.",
        status: "error",
        duration: 2000,
      });
    }
  }, [error, toast]);

  const searchLocationHandler = (cityName) => {
    setQuery(cityName);
  };

  return (
    <>
      <div
        className="background-image"
        style={{ backgroundImage: "url(" + currentBackgroundImage + ")" }}
      >
        <div className="main-page">
          <div className="section-main-weather">
            <h1>weatha</h1>
            <Box>
              <CustomSkeleton isLoading={isLoading}>
                <WeatherWidget
                  temperature={data.main.temp}
                  city={data.name}
                  date={data.dt}
                  weatherType={getIconURL(data.weather[0].icon)}
                />
              </CustomSkeleton>
            </Box>
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

              <CustomSkeleton isLoading={isLoading}>
                <div className="text-rows">
                  <InfoRow text="Cloudy" value={`${data.clouds.all}%`} />
                  <InfoRow text="Humidity" value={`${data.main.humidity}%`} />
                  <InfoRow text="Wind" value={`${data.wind.speed} m/s`} />
                  <InfoRow
                    text="Sunrise"
                    value={dateFormat(data.sys.sunrise * 1000, "UTC:h:MM TT Z")}
                  />
                  <InfoRow
                    text="Sunset"
                    value={dateFormat(data.sys.sunset * 1000, "UTC:h:MM TT Z")}
                  />
                </div>
              </CustomSkeleton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
