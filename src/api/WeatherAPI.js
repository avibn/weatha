import axios from "axios";

const API_BASE = "https://api.openweathermap.org/data/2.5/weather?";
const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

function requestWeatherAPI(params = {}) {
    const searchParams = new URLSearchParams({
        ...params,
        units: "metric",
        appid: API_KEY,
    });

    // send the request
    console.log("Sending request");
    return axios.get(API_BASE + searchParams.toString()).then((res) => res.data);
}

function searchByName(cityName) {
    return requestWeatherAPI({
        q: cityName,
    });
}

function getIconURL(iconCode) {
    return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

export default searchByName;
export { getIconURL };
