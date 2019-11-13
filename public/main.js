const main = () => {
  if (document.querySelector("h1.hello-world")) {
    document.querySelector("h1.hello-world").textContent = "Hello, World!";
  }
};

let weatherdatacity;
let weatherdatazip;
let itype = document.getElementById("type").value;

const getweahtercity = async () => {
  console.log("going out to api");
  document.querySelector(".weather").textContent = "";

  const itype = document.getElementById("type").value;
  console.log("this is itype" + itype);
  const responsecity = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      itype +
      "&appid=13b9ac9059c3eb9dd65f0abf25700a1c"
  );

  console.log("back from api");
  console.log(responsecity);
  weatherdatacity = await responsecity.json();
  console.log(weatherdatacity.main);
  revealweathercity(weatherdatacity.main.temp);
};

const getweahterzip = async () => {
  console.log("going out to zip api");
  document.querySelector(".weather").textContent = "";
  const itype = document.getElementById("type").value;
  const responsezip = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?zip="+
    itype + "&appid=2a3f631e21847589547b8dfcf7ef87c8"
  );

  console.log("back from api");
  console.log(responsezip);
  weatherdatazip = await responsezip.json();
  console.log(weatherdatazip);
  revealweatherzip(weatherdatazip.main.temp);
};

const revealweathercity = weatherdatacity => {
  console.log("in reveal " + weatherdatacity);
  document.querySelector(".weathercity").textContent = weatherdatacity;
};

const revealweatherzip = () => {
  document.querySelector(".weatherzip").textContent = weatherdatazip.weather;
};

//if (typeof itype === "string") {
  console.log("checkk");
  document.querySelector(".search").addEventListener("click", getweahtercity);
//  } else {
  document.querySelector(".search").addEventListener("click", getweahterzip);
//}

// Document.querySelector('.search').addEventListener('click', getweahtercity)
// Document.querySelector('.search').addEventListener('click', getweahterzip)

document.addEventListener("DOMContentLoaded", main);
