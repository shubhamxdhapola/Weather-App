export default function WeatherDetailsRight({weatherInfo}) {
    return(
        <>
            <div className="weather-details-left">
                <div className="weather-details-box">
                    <p className="weather-detail-label"><i className="fa-solid fa-droplet"></i> Humidity</p>
                    <p className="weather-detail-value"> {weatherInfo.humidity}%</p>
                </div>
                <div className="weather-details-box">
                    <p className="weather-detail-label"><i className="fa-solid fa-wind"></i> Wind Speed</p>
                    <p className="weather-detail-value"> {(weatherInfo.windSpeed*3.6).toFixed(1)} km/h</p>
                </div>
            </div>
        </>
    )
}