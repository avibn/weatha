import * as Images from "../assets";

export const getBackgroundImage = (weatherID) => {
    if (weatherID < 300) {
        return Images.Thunderstorm;
    } else if (weatherID < 500) {
        return Images.Drizzle;
    } else if (weatherID < 600) {
        return Images.Rain;
    } else if (weatherID < 700) {
        return Images.Snow;
    } else if (weatherID < 800) {
        return Images.Mist;
    } else if (weatherID === 800) {
        return Images.Clear;
    } else if (weatherID < 900) {
        return Images.Cloudy;
    }
    return Images.Cloudy;
};
