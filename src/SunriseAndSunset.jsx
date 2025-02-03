export default function SunriseAndSunset({weatherInfo}) {
    
    return(
        <>
            <div className="sunrise-and-sunset">
                <div className="sunrise sun">
                    <p className="sunrise-text sun-text"><i className="fa-solid fa-arrow-up"></i> Sunrise</p>
                    <p className="sunrise-time sun-time">{weatherInfo.sunriseTime.split(',')[2]}</p>
                </div>
                <div className="sunset sun">
                    <p className="sunrise-text sun-text">Sunset <i className="fa-solid fa-arrow-down"></i> </p>
                    <p className="sunrise-time sun-time">{weatherInfo.sunsetTime.split(',')[2]}</p>
                </div>
            </div>
        </>
    )
}