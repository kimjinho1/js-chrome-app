const API_KEY = "2e24d46ce5af9cadcfabc55173be528a";

function readTextFile(file) {
  const rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = () => {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        const allText = rawFile.responseText;
        alert(allText);
      }
    }
  };
  rawFile.send(null);
}

// readTextFile("file:///Users/jinhokim/nomad/ChromeWeb/7.my_todo_list/.env");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("can't, find you, No weather for you.");
}

// navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

const lat = 44.34;
const lng = 10.99;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const city = document.querySelector("#weather span:first-child");
    const weather = document.querySelector("#weather span:last-child");
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });
