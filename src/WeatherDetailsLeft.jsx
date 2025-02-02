export default function WeatherDetailsRight({info}) {
    return(
        <>
            <div className="weather-details-left">
                <div className="weather-details-box">
                    <p className="weather-detail-label"><i className="fa-solid fa-droplet"></i> Humidity</p>
                    <p className="weather-detail-value"> {info.humidity}%</p>
                </div>
                <div className="weather-details-box">
                    <p className="weather-detail-label"><i className="fa-solid fa-wind"></i> Wind Speed</p>
                    <p className="weather-detail-value"> {(info.windSpeed*3.6).toFixed(1)} km/h</p>
                </div>
            </div>
        </>
    )
}