import HeaderInfo from './HeaderInfo';
import WeatherDetailsRight from './WeatherDetailsRight';
import WeatherDetailsLeft from './WeatherDetailsLeft';
import SunriseAndSunset from './SunriseAndSunset';

export default function InfoBox({ weatherInfo }) {
    return (
        <>
            <HeaderInfo weatherInfo={weatherInfo} />
            <div className='weather-details'>
               <WeatherDetailsLeft weatherInfo={weatherInfo} />
               <WeatherDetailsRight weatherInfo={weatherInfo} />
            </div>
            <SunriseAndSunset weatherInfo={weatherInfo}/>

        </>
    );
}
