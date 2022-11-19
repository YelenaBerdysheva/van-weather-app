function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");

  let temperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = temperature;

  let city = response.data.city;
  cityElement.innerHTML = city;

  let description = response.data.condition.description;
  descriptionElement.innerHTML = description;

  let humidity = response.data.temperature.humidity;
  humidityElement.innerHTML = `Humidity: ${humidity} %`;

  let wind = Math.round(response.data.wind.speed);
  windElement.innerHTML = `Wind: ${wind} km/h`;

  let date = formatDate(response.data.time);
  dateElement.innerHTML = `Last update ${date}`;
}

let apiKey = "8a42d63ca72b703e22234f6otedfed64";
let units = "metric";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Lisbon&key=8a42d63ca72b703e22234f6otedfed64&units=metric`;
axios.get(apiUrl).then(displayTemperature);
