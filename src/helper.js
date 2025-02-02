import dotenv from 'dotenv'
dotenv.config()

function getTime(timestamp) {
    const date = new Date(timestamp * 1000);
        return date.toLocaleString([], {  
            weekday: "short", 
            month: "short",
            day: "numeric",
            hour: "2-digit",  
            minute: "2-digit",  
            hour12: true 
    }); 
}

export async function fetchWeatherInfo(city) {
    let API_KEY = process.env.API_KEY
    let API_URL = `https://api.openweathermap.org/data/2.5/weather`

    try {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let data = await response.json()
        if(data.cod === '404') throw new Error(data.message)
        return {
            id : data.weather[0].id,
            city: city,
            humidity: data.main.humidity,
            temp: data.main.temp,
            feelsLike: data.main.feels_like,
            visibility : data.visibility,
            weatherDesc: data.weather[0].description,
            pressure : data.main.pressure,
            weather: data.weather[0].main,
            sunset: getTime(data.sys.sunset),
            windSpeed: data.wind.speed,
            currentTime : getTime(data.dt),
            isDayOrNight : data.weather[0].icon,
            sunrise: getTime(data.sys.sunrise),
        }
    } catch(err){
        return {error : err.message}
    }
}

export function getCurrentTime() {
    return new Date().toLocaleString([],{
         hour12 : true,
         hour : '2-digit',
         minute : '2-digit',
         second : '2-digit',
         day : '2-digit',
         month : 'short',
         weekday : 'short',
         year : 'numeric',
     })
}

export function getWeatherImage(weatherCondition, isDayOrNight, weatherID) {
    
    isDayOrNight = isDayOrNight.slice(-1)
    switch(weatherCondition) {

        case 'Clear':
            return isDayOrNight === 'd' 
                ? '/clearDay.png' 
                : '/clearNight.png';
    
        case 'Clouds':
            return weatherID === 801 
                ? isDayOrNight === 'd' 
                    ? '/cloudyDay.png' 
                    : '/cloudyNight.png'
                : '/cloudy.png';
    
        case 'Rain':
            return weatherID === 500 
                ? isDayOrNight === 'd' 
                    ? '/rainyDay.png' 
                    : '/rainyNight.png'
                : '/rain.png';
    
        case 'Thunderstorm':
            return weatherID === 200 
                ? isDayOrNight === 'd' 
                    ? '/thunderstormDay.png' 
                    : '/thunderstormNight.png'
                : '/thunderstorm.png';
    
        case 'Snow':
            return weatherID === 600 
                ? isDayOrNight === 'd' 
                    ? '/snowDay.png' 
                    : '/snowNight.png' 
                : '/snow.png';
    
        default:
            return isDayOrNight === 'd' 
                ? '/atmosphericConditionDay.png' 
                : '/atmosphericConditionNight.png';
    }
}

export function getWeatherIcon(weather, isDayOrNight) {
    switch (weather) {

        case 'Clear': return isDayOrNight === 'd' 
            ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    
        case 'Clouds': return 'fa-solid fa-cloud';
    
        case 'Rain': return 'fa-solid fa-cloud-rain';
    
        case 'Snow': return 'fa-regular fa-snowflake';
    
        case 'Thunderstorm': return 'fa-solid fa-cloud-bolt';
    
        default: return 'fa-solid fa-smog';
    }
    
}
