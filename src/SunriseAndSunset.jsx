import WbTwilightIcon from '@mui/icons-material/WbTwilight';
export default function SunriseAndSunset({weatherInfo}) {
    
    return(
        <>
            <div className="sunrise-and-sunset">
                <div className="sunrise">
                    <p className="sun-text"><i className="fa-solid fa-arrow-up"></i> Sunrise</p>
                    <p className=" sun-time">{weatherInfo.sunriseTime.split(',')[2]}</p>
                </div>
                <WbTwilightIcon className='sun-icon'/>
                <div className="sunset">
                    <p className=" sun-text">Sunset <i className="fa-solid fa-arrow-down"></i> </p>
                    <p className="e sun-time">{weatherInfo.sunsetTime.split(',')[2]}</p>
                </div>
            </div>
        </>
    )
}