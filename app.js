const div = document.querySelector("div")

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
            .then((data) => console.log(data));
    }
};