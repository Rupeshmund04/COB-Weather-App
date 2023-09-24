const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city)=>{
    cityName.innerHTML = city
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        
    })
    .catch(err => console.error(err));
}

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

    
