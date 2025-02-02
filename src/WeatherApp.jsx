import SearchBox from './SearchBox.jsx'
import InfoBox from './InfoBox.jsx'
import Error from './Error.jsx'
import { useState } from "react"

export default function WeatherApp() {

    let [weatherInfo, setWeatherInfo] = useState({})
    let getWeatherInfo = (newInfo) => setWeatherInfo(newInfo)
    
    return(
        <>
            <SearchBox getWeatherInfo={getWeatherInfo}/>
            {
                Object.keys(weatherInfo).length > 0 && 
                ( weatherInfo.error 
                    ? <Error errMsg={weatherInfo.error} /> 
                    : <InfoBox info={weatherInfo}/>
                )
            }
        </>
    )
}