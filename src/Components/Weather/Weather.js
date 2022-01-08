import { useEffect, useState } from 'react';

function Weather(props) {
     const [weatherData, setWeatherData] = useState();

     console.log(props);

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
               return <h1>{weatherData.current.temp_f}F</h1>;
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
