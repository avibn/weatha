import axios from "axios";

const API_BASE = "https://api.openweathermap.org/data/2.5/weather?";
const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

function requestWeatherAPI(params = {}) {
    const searchParams = new URLSearchParams({
        ...params,
        appid: API_KEY,
    });

    axios.get(API_BASE + searchParams.toString()).then((response) => {
        console.log(response.data);
        return response.data;
    });
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
