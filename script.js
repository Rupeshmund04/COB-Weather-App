document.addEventListener("DOMContentLoaded", () => {
  const cityName = document.getElementById('cityName');
  const cloud_pct = document.getElementById('cloud_pct');
  const temp = document.getElementById('temp');
  const feels_like = document.getElementById('feels_like');
  const humidity = document.getElementById('humidity');
  const min_temp = document.getElementById('min_temp');
  const max_temp = document.getElementById('max_temp');
  const wind_speed = document.getElementById('wind_speed');
  const wind_degrees = document.getElementById('wind_degrees');
  const weather_desc = document.getElementById('weather_desc'); 
  const submit = document.getElementById('submit-btn');
  const city = document.getElementById('city');

  const apiKey = "7271b6627c1dc186e7cdcaa739be3c15";

  const getWeather = (city) => {
    console.log("Fetching weather for:", city);
    cityName.textContent = city;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(response => {
      if (response.cod === 404 || response.cod === "404") {
        alert("City not found. Please enter another city name");
        return;
      }

      cloud_pct.textContent = response.clouds.all;
      temp.textContent = response.main.temp;
      feels_like.textContent = response.main.feels_like;
      humidity.textContent = response.main.humidity;
      min_temp.textContent = response.main.temp_min;
      max_temp.textContent = response.main.temp_max;
      wind_speed.textContent = response.wind.speed;
      wind_degrees.textContent = response.wind.deg;
      weather_desc.textContent = response.weather[0].description;

    })
    .catch(err => {
      console.error(err);
      alert("Something went wrong while fetching weather data.");
    });
  };

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
  });

  getWeather("Bhawanipatna");

});
