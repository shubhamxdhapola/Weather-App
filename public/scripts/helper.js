function formatWeatherTime(timestamp) {
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
    let API_KEY = import.meta.env.VITE_API_KEY
    let API_URL = `https://api.openweathermap.org/data/2.5/weather`

    try {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let data = await response.json()
        
        if(data.cod === '404') throw new Error(data.message)
        return {
            weatherID : data.weather[0].id,
            cityName: city,
            humidity: data.main.humidity,
            temperature: data.main.temp,
            feelsLike: data.main.feels_like,
            visibility : data.visibility,
            weatherDescription: data.weather[0].description,
            pressure : data.main.pressure,
            weatherCondition: data.weather[0].main,
            sunsetTime: formatWeatherTime(data.sys.sunset),
            windSpeed: data.wind.speed,
            lastUpdatedTime : formatWeatherTime(data.dt),
            isDayOrNight : data.weather[0].icon,
            sunriseTime: formatWeatherTime(data.sys.sunrise),
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
                ? '/images/clearDay.png' 
                : '/images/clearNight.png';
    
        case 'Clouds':
            return weatherID === 801 
                ? isDayOrNight === 'd' 
                    ? '/images/cloudyDay.png' 
                    : '/images/cloudyNight.png'
                : '/images/cloudy.png';
    
        case 'Rain':
            return weatherID === 500 
                ? isDayOrNight === 'd' 
                    ? '/images/rainyDay.png' 
                    : '/images/rainyNight.png'
                : '/images/rain.png';
    
        case 'Thunderstorm':
            return weatherID === 200 
                ? isDayOrNight === 'd' 
                    ? '/images/thunderstormDay.png' 
                    : '/images/thunderstormNight.png'
                : '/images/thunderstorm.png';
    
        case 'Snow':
            return weatherID === 600 
                ? isDayOrNight === 'd' 
                    ? '/images/snowDay.png' 
                    : '/images/snowNight.png' 
                : '/images/snow.png';
    
        default:
            return isDayOrNight === 'd' 
                ? '/images/atmosphericConditionDay.png' 
                : '/images/atmosphericConditionNight.png';
    }
}

export function getWeatherIcon(weather, isDayOrNight) {

    isDayOrNight = isDayOrNight.slice(-1)
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
