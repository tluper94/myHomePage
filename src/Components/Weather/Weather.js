import { useEffect, useState } from 'react';
import './weather.css';

function Weather(props) {
     const [weatherData, setWeatherData] = useState();

     useEffect(() => {
          const getData = async () => {
               const weatherApi =
                    'http://api.weatherapi.com/v1/forecast.json?key=25bd208b8a974389aea40747220501 &q=76504&days=7&aqi=no&alerts=yes';
               await fetch(weatherApi)
                    .then((data) => data.json())
                    .then((res) => {
                         setWeatherData(res);
                    });
          };
          getData();
     }, []);

     console.log(weatherData);

     const displayCurrent = () => {
          if (weatherData) {
               const options = { weekday: 'short' };
               const getDay = new Intl.DateTimeFormat('en-US', options);
               const date_01 = new Date(
                    `${weatherData.forecast.forecastday[0].date} 00:00`
               );
               const date_02 = new Date(
                    `${weatherData.forecast.forecastday[1].date} 00:00`
               );
               const date_03 = new Date(
                    `${weatherData.forecast.forecastday[2].date} 00:00`
               );
               const day_01 = getDay.format(date_01);
               const day_02 = getDay.format(date_02);
               const day_03 = getDay.format(date_03);
               console.log(day_01, day_02, day_03);
               return (
                    <div className='weather_current'>
                         <h1 className='weather_current_label'>Current</h1>
                         <h1 className='weather_current_temp'>
                              {weatherData.current.temp_f}°F
                         </h1>
                         <img
                              className='weather_current_icon'
                              width='75px'
                              height='75px'
                              src={weatherData.current.condition.icon}
                         ></img>
                    </div>
               );
          }
     };

     return (
          <div
               onTouchEnd={props.onTouchEnd}
               onMouseUp={props.onMouseUp}
               onMouseDown={props.onMouseDown}
               style={props.style}
               className={`${props.className} box`}
          >
               {displayCurrent()}
          </div>
     );
}

export default Weather;
