import { getWeatherImage, getWeatherIcon } from '../../public/scripts/helper.js'

export default function HeaderInfo({weatherInfo}) {
    return (
        <>
            <div className="header">
                <div className="weather-and-image">
                    <div className="loc-temp-cond">
                        <div className="city-and-icon">
                            <h1 className="city" >{weatherInfo.cityName}</h1>
                            <i className="fa-solid fa-location-dot"></i> 
                        </div>
                        <p className="temperature">{weatherInfo.temperature}&deg;</p>
                        <p className="condition">
                            <span> {weatherInfo.weatherCondition} </span> 
                            <i className={getWeatherIcon(weatherInfo.weatherCondition, weatherInfo.isDayOrNight)}></i>
                        </p>
                    </div>
                    <div className="weather-image" >
                        <img src={getWeatherImage(weatherInfo.weatherCondition, weatherInfo.isDayOrNight, weatherInfo.weatherID)} alt={weatherInfo.weatherCondition} width={'80px'}/>
                    </div>
                </div>
                <p className="description">
                    <span>{weatherInfo.weatherDescription}. Feels like {weatherInfo.feelsLike}&deg;</span> <br />
                    <span>Last updated : {weatherInfo.lastUpdatedTime}</span>
                </p>
            </div>
        </>
    )
}
