import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import Error from './Error'
import CurrentTime from './CurrentTime'
import { useState } from 'react'

export default function WeatherApp() {

    let [weatherInfo, setWeatherInfo] = useState({})
    let getWeatherInfo = (newInfo) => setWeatherInfo(newInfo)
    
    return(
        <>
            <CurrentTime />
            <SearchBox getWeatherInfo={getWeatherInfo}/>
            {
                Object.keys(weatherInfo).length > 0 && 
                ( weatherInfo.error 
                    ? <Error errMsg={weatherInfo.error} /> 
                    : <InfoBox weatherInfo={weatherInfo}/>
                )
            }
        </>
    )
}