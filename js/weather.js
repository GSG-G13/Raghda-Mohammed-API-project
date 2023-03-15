const cityName = document.querySelector(".city");
const weatherCondition = document.querySelector(".weather-condition");
const temp = document.querySelector(".temp");
const feelsLike = document.querySelector(".feels-like");
const max = document.querySelector(".temp-max");
const humidity = document.querySelector(".humidty");
const deg = document.querySelector(".deg");
const input = document.querySelector(".search-bar");
const submit = document.querySelector(".add-icon");
const img = document.querySelector(".weather-gif");

const getWeatherData = (location) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // console.log(xhr.response);
      const data = JSON.parse(xhr.response);
      const name = data.name;
      const temp = data.main.temp;
      const feels_like = data.main.feels_like;
      const description = data.weather[0].description;
      const humidity = data.main.humidity;
      const temp_max = data.main.temp_max;
      console.log(description);
      buildPage(name, temp, feels_like, description, humidity, temp_max);
      getGif(description); //for raghda git gif
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

const buildPage = (place, t, feels, desc, humid, m) => {
  desc = desc.charAt(0).toUpperCase() + desc.slice(1);
  cityName.textContent = place;
  weatherCondition.textContent = desc;
  temp.textContent = Math.round(t);
  feelsLike.textContent = "Feels like: " + Math.round(feels) + "°";
  max.textContent = "Today's high: " + Math.round(m) + "°";
  humidity.textContent = "Humidty: " + humid + "%";
};

// submit.addEventListener("click", (input) => {
//   getWeather(input.value);
// });
submit.onclick = () => {
  console.log("submit");
  let val = input.value;
  getWeatherData(val);
};

console.log(input);

input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    submit.click();
  }
});

// input.addEventListener("click", () => {
//   input.value = "";
// });
