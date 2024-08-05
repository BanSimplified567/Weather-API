import { useState } from 'react';
import './index.css';

const App = () => {
   const [city, setCity] = useState('');
   const [weatherData, setWeatherData] = useState(null);

   const getWeather = async () => {
      try {
         const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c4bee1e90437fea3574fc20d672193ae&units=metric`
         );
         const data = await res.json();
         setWeatherData(data);
      } catch (error) {
         console.error(error);
         alert('Please Enter Valid City Name!!');
      }
   };

   if (weatherData && !weatherData.name) {
      return (
         <div className="city-name">
            <h1>Please Enter A City Name</h1>
         </div>
      );
   }
   return (
      <div>
         <div id="form">
            <h1>!!!! Weather Check !!!!</h1>
            <input
               type="text"
               value={city}
               onChange={(e) => setCity(e.target.value)}
               placeholder="Enter City Name"
            />
            <button onClick={getWeather}>Get Weather</button>
         </div>
         <div id="container">
            {weatherData ? (
               <>
                  <div>
                     <iframe
                        src={`https://www.google.com/maps/embed/v1/place?q=${weatherData.name}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
                        title="map"
                     ></iframe>
                  </div>
                  <div>
                     <h2>City Name : {weatherData.name}</h2>
                     <h3>Temperature : {weatherData.main.temp} °C</h3>
                     <h3>Pressure : {weatherData.main.pressure} Pa</h3>
                     <h3>Humidity : {weatherData.main.humidity} g/Kg</h3>
                     <h3>Sunrise : {new Date(weatherData.sys.sunrise * 1000).toString()}</h3>
                     <h3>Sunset : {new Date(weatherData.sys.sunset * 1000).toString()}</h3>
                     <h3>Max Temp : {weatherData.main.temp_max} °C</h3>
                     <h3>Min Temp : {weatherData.main.temp_min} °C</h3>
                  </div>
               </>
            ) : null}
         </div>
         <footer className="footer">
            <ul className="menu">
               <li className="menu__item">
                  <a className="menu__link" href="https://github.com/Blacklion567">
                     GitHub |
                  </a>
               </li>
               <li className="menu__item">
                  <a
                     className="menu__link"
                     href="https://www.linkedin.com/in/jade-ivan-bringcola-bb9466272/"
                  >
                     Linkdin |
                  </a>
               </li>
               <li className="menu__item">
                  <a className="menu__link" href="https://twitter.com/JBringcola">
                     Twitter |
                  </a>
               </li>
               <li className="menu__item">
                  <a className="menu__link" href="https://www.instagram.com/nocodearea/">
                     Instagram |
                  </a>
               </li>
               <li className="menu__item">
                  <a className="menu__link" href="https://github.com/Blacklion567/Blacklion567">
                     Portfolio |
                  </a>
               </li>
               <li className="menu__item">
                  <a className="menu__link" href="mailto:naviedaj567@gmail.com">
                     Email{' '}
                  </a>
               </li>
            </ul>
            <p>&copy;Created By Blacklion567 (MERN DEVELOPER)</p>
         </footer>
      </div>
   );
};

export default App;
