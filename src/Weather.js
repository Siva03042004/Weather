import React, { useRef, useState } from 'react';

export const Weather = () => {
    const ip = useRef();
    const [weather, setWeatherDetails] = useState(null);

    const report = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ip.current.value}&appid=6c9fde9d75df62f1358373069c5ff263`)
        .then(result => result.json())
        .then(data => setWeatherDetails(data))
        .catch(error => console.log(error));
    };

    return (
        <>
            <div className='weather'>
                <h2>Weather</h2>
                <input ref={ip} placeholder="Type your City" />
                <button onClick={report}>Get Weather</button>            
            {
            weather ? 
            <div className='weather1'>
            <tr>
                <h1 style={{color:"black",fontSize:"80px"}}>{ip.current.value}</h1>
                <h1>Weather:{weather.weather[0].main}</h1>
                <h1>Wind Speed:{weather.wind.speed}m/s</h1>
                <h1>Temperature:{weather.main.temp}ºC</h1>
            </tr>
            </div>:""
            }
        </div>    
        </>
    );
};
