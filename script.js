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
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');
const weather_desc = document.getElementById('weather_desc'); 
const submit = document.getElementById('submit-btn');
const city = document.getElementById('city');


const apiKey = "7271b6627c1dc186e7cdcaa739be3c15";

// const api key : 7271b6627c1dc186e7cdcaa739be3c15;
// new api url : https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=7271b6627c1dc186e7cdcaa739be3c15&units=metric;
 
const getWeather = (city) => {
    cityName.innerHTML = city
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=7271b6627c1dc186e7cdcaa739be3c15&units=metric')
    .then(response => response.json())
    .then((response) => {
        if (response.cod === 404 || response.cod === "404") {
            alert("City not found. Please enter another city name");
            return;
        }
        
        console.log(response)
        cloud_pct.innerHTML = response.clouds.all;
        temp.innerHTML = response.main.temp;
        feels_like.innerHTML = response.main.feels_like;
        humidity.innerHTML = response.main.humidity;
        min_temp.innerHTML = response.main.temp_min;
        max_temp.innerHTML = response.main.temp_max;
        wind_speed.innerHTML = response.wind.speed;
        wind_degrees.innerHTML = response.wind.deg;

        weather_desc.innerHTML = response.weather[0].description;
        
        const sunriseDate = new Date(response.sys.sunrise * 1000);
        sunrise.innerHTML = sunriseDate.toLocaleTimeString();
        const sunsetDate = new Date(response.sys.sunset * 1000);
        sunset.innerHTML = sunsetDate.toLocaleTimeString();
        
    })
    .catch(err => {
     console.error(err);
     alert("Something went wrong while fetching weather data.");
    });
});

submit.addEventListener("click", (e)=> {
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Bhawanipatna")

function validateform() {
    let f_name = document.myform.name.value;
    let number = document.myform.number.value;
    let email = document.myform.email.value;
    let atposition = email.indexOf("@");
    let dotposition = email.indexOf(".");

    if (f_name == null || f_name == " " || f_name.length<4) {
        alert("Name is required\nEnter full name which must be of 4 character ");
        return false;
    }
    else if (number == null || number.length < 10) {
        alert("Enter valid Phone Number");
        return false;
    }
    else if (atposition < 2 || dotposition < atposition + 6 || email == null) {
        alert("Email is required\nPlease enter valid email");
        return false;
    }
}
});

    










