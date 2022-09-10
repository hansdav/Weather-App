const searchbutton = document.querySelector("button#search").addEventListener("click", function() {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(e) {
    if (e.key == "Enter") {
        weather.search();
    }
});

let weather = {
    apiKey: "3165b7995bfc5c9530915aa03d113f98",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city 
            + "&appid=" 
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        console.log(name,icon,description,temp,humidity);
        document.querySelector(".city-name").innerText = name;
        document.querySelector(".temperature").innerText = Math.round(temp - 273.15)+"°C";
        document.querySelector("img.weather").src = "https://openweathermap.org/img/wn/"+icon+"@2x.png";
        document.querySelector(".humidity").innerText = humidity+"%";

    },

    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
};