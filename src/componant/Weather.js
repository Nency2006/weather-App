import React, { useState } from 'react'
import './weather.css';
import search_icon from '../assets/search.png';
import hummidity_icon from '../assets/hummidity.png';
import widdy_icon from '../assets/widdy.png';

export default function Weather() {
    const [weatherData, setWeatherdata] = useState(false);
    const [city, setcity] = useState("");

    const search = async (city) => {
        try {
            const url = `http://api.weatherapi.com/v1/current.json?key=0d2b263021904407923140945253012&q=${city}&aqi=yes`
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            
            setWeatherdata({
                humidity: data.current.humidity,
                windSpeed: data.current.wind_kph,
                temperature: Math.floor(data.current.temp_c),
                location: data.location.name,
                icon: `https:${data.current.condition.icon}`
            });

        } catch (error) {

        }
    }


    return (
        <div className='weather'>
            <div className='search-bar'>
                <input type='text' value={city} placeholder='Search' onChange={(e) => setcity(e.target.value)} />
                <img src={search_icon} alt=""
                    onClick={() => {
                        if (city.trim() === "") {
                            alert("Please enter city name First !!");
                        }else{
                            search(city);
                        }
                }}/>
            </div>

            <img src={weatherData.icon} alt="" className='weather-icon' />
            <p className='temp'>{weatherData.temperature}°C</p>
            <p className='loc'>{weatherData.location}</p>

            <div className='weather-data'>
                <div className='col'>
                    <img src={hummidity_icon} alt=""></img>
                    <div >
                        <p>{weatherData.humidity} %</p>
                        <span>Hummidity</span>
                    </div>
                </div>
                <div className='col'>
                    <img src={widdy_icon} alt=""></img>
                    <div >
                        <p>{weatherData.windSpeed}km/h</p>
                        <span>Wind Speed</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
