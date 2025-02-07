export default function WeatherDetailsRight({weatherInfo}) {
    return(
        <>
            <div className="weather-details-right">
                <div className="weather-details-box">
                    <p className="weather-detail-label"><i className="fa-solid fa-arrows-to-dot"></i> Pressure</p>
                    <p className="weather-detail-value"> {weatherInfo.pressure} mb</p>
                </div>
                <div className="weather-details-box">
                    <p className="weather-detail-label"><i className="fa-regular fa-eye"></i> Visibility</p>
                    <p className="weather-detail-value"> {(weatherInfo.visibility/1000).toFixed(2)} km</p>
                </div>
            </div>
        </>
    )
}