import HeaderInfo from "./HeaderInfo";
import WeatherDetailsRight from "./WeatherDetailsRight";
import WeatherDetailsLeft from "./WeatherDetailsLeft";
import SunriseAndSunset from "./SunriseAndSunset";

export default function InfoBox({ info }) {
    return (
        <>
            <HeaderInfo info={info} />
            <div className="weather-details">
               <WeatherDetailsLeft info={info} />
               <WeatherDetailsRight info={info} />
            </div>
            <SunriseAndSunset info={info}/>

        </>
    );
}
