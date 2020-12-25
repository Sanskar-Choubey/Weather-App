var inputField = document.querySelector(".input-field");
var button = document.querySelector(".button");
var timeZone = document.querySelector(".location-timezone");
var cityName = document.querySelector(".city-name");
var cityTemp = document.querySelector(".temprature-degree");

var url = "http://api.openweathermap.org/data/2.5/weather";
var text = inputField.value;

function urlHandler(text) {
    return url + "?" + "q=" + inputField.value + "&appid=" + "f52313f82b75f87c7f0c6cd833e8b1fe";
}

function fetchHandler() {
    return (
        fetch(urlHandler(text))
        .then(response => response.json())
        .then(JSON => {
            var city = JSON.name;
            cityName.innerHTML = city;

            var timezone = JSON.timezone;
            timeZone.innerHTML = timezone;

            var temp = JSON.main.temp;
            var centi = temp - 273.15;
            var roundCenti = Math.round(centi);
            cityTemp.innerHTML = roundCenti;
        })
    )
}

function buttonEventHandler() {
    console.log("Clicked");
    console.log(urlHandler(text));
    fetchHandler();
}

button.addEventListener('click', buttonEventHandler);

