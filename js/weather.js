const cityName = document.querySelector(".city");
const weatherCondition = document.querySelector(".weather-condition");
const temp = document.querySelector(".temp");
const feelsLike = document.querySelector(".feels-like");
const max = document.querySelector(".temp-max");
const humidity = document.querySelector(".humidty");
const deg = document.querySelector(".deg");
const input = document.querySelector(".search-bar");
const submit = document.querySelector(".add");
const img = document.querySelector(".weather-gif");
const body = document.querySelector("body");

const getWeatherData = (location) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.response);
      const data = JSON.parse(xhr.response);
      const name = data.name;
      const temp = data.main.temp;
      const c = data.main.feels_like;
      const description = data.weather[0].description;
      const humidity = data.main.humidity;
      const temp_max = data.main.temp_max;
      buildPage(name, temp, feels_like, description, humidity, temp_max);
      // getGif(description); for raghda git gif
    }
  };
  xhr.open(
    "Get",
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      location +
      "&units=metric&appid=cea3a3dedb45d30d54bc6c4b08d466cd",
    true
  );
  xhr.send();
};

getWeatherData("Gaza");
