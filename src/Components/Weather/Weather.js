import { useEffect, useState } from 'react';
import './weather.css';

function Weather(props) {
     const [weatherData, setWeatherData] = useState();
     const user = props.user;
     const round = Math.round;

     useEffect(() => {
          const getData = async () => {
               const weatherApi = `https://api.weatherapi.com/v1/forecast.json?key=25bd208b8a974389aea40747220501&q=${user.zipCode}&days=3&aqi=no&alerts=no`;
               await fetch(weatherApi)
                    .then((data) => data.json())
                    .then((res) => {
                         setWeatherData(res);
                    })
                    .catch((err) => {
                         console.log(err);
                    });
          };
          getData();
     }, []);

     console.log(weatherData);

     const getForecast = () => {
          const forecastData = weatherData.forecast.forecastday;
          return forecastData.map((forecast, i) => {
               const options = { weekday: 'short' };
               const getDay = new Intl.DateTimeFormat('en-US', options);
               const date = new Date(
                    `${forecast.date.replace(/-/g, '/')} 00:00`
               );
               console.log(forecast.day.maxtemp_f);
               const day = getDay.format(date);
               return (
                    <div
                         key={forecast.date_epoch}
                         className='weather_forecast_day'
                    >
                         <h1>{day}</h1>
                         <img src={forecast.day.condition.icon}></img>
                         <h3>{`H ${round(forecast.day.maxtemp_f)}°F`}</h3>
                         <h3>{`L ${round(forecast.day.mintemp_f)}°F`}</h3>
                         <h3>{`% of Rain`}</h3>
                         <h3>{`${round(
                              forecast.day.daily_chance_of_rain
                         )}%`}</h3>
                    </div>
               );
          });
     };

     const displayCurrent = () => {
          if (weatherData) {
               return (
                    <div className='weather_current'>
                         <h1 className='weather_current_label'>{`${weatherData.location.name}, ${weatherData.location.region}`}</h1>
                         <h1 className='weather_current_label'>Current</h1>
                         <h1 className='weather_current_temp'>
                              {round(weatherData.current.temp_f)}°F
                         </h1>
                         <img
                              className='weather_current_icon'
                              width='40px'
                              height='40px'
                              src={weatherData.current.condition.icon}
                         ></img>
                         <div className='weather_forecast'>{getForecast()}</div>
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
