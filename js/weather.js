const API_KEY = "2e24d46ce5af9cadcfabc55173be528a";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      const icon = document.querySelector(
        ".weather > .weather_container > img.weather_icon"
      );
      const temp = document.querySelector(
        ".weather > .weather_container > span.weather_temp"
      );
      const city = document.querySelector("div.weather > span.weather_city");
      icon.src = iconUrl;
      temp.innerText = `${data.main.temp}°`;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("can't, find you, No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// const lat = 44.34;
// const lng = 10.99;
// const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
//     const icon = document.querySelector(
//       ".weather > .weather_container > img.weather_icon"
//     );
//     const temp = document.querySelector(
//       ".weather > .weather_container > span.weather_temp"
//     );
//     const city = document.querySelector(
//       "header > div.weather > span.weather_city"
//     );

//     icon.src = iconUrl;
//     temp.innerText = `${data.main.temp.toFixed(1)}°`;
//     city.innerText = data.name;
//   });
