import { getWeatherImage, getWeatherIcon } from "./helper.js"

export default function HeaderInfo({info}) {
    return (
        <>
            <div className="header">
                <div className="weather-and-image">
                    <div className="loc-temp-cond">
                        <div className="city-and-icon">
                            <h1 className="city" >{info.city}</h1>
                            <i className="fa-solid fa-location-dot"></i> 
                        </div>
                        <p className="temperature">{info.temp}&deg;</p>
                        <p className="condition">
                            <span> {info.weather} </span> 
                            <i className={getWeatherIcon(info.weather, info.isDayOrNight)}></i>
                        </p>
                    </div>
                    <div className="weather-image" >
                        <img src={getWeatherImage(info.weather, info.isDayOrNight, info.id)} alt={info.weather} width={'80px'}/>
                    </div>
                </div>
                <p className="description">
                    <span>{info.weatherDesc}. Feels like {info.feelsLike}&deg;</span> <br />
                    <span>Last updated : {info.currentTime}</span>
                </p>
            </div>
        </>
    )
}
