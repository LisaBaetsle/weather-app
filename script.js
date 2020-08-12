document.getElementById('submit').addEventListener('click', function (event) {
  let cityInput = document.getElementById('cityInput').value;
  console.log(cityInput);

  console.log(Math.floor(new Date().getTime() / 1000));

  const api = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&units=metric&appid=655a19af3d0a8572719255b11fb9c8d0`


  fetch(api)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(data.list[2].weather[0].description)
      // HEADER
      document.getElementById('cityCountryName').textContent = `${data.city.name}, ${data.city.country}`;

      // MAIN DAY INFO
      document.getElementById('temperature').textContent = `${Math.round(data.list[0].main.temp)}°`;
      document.getElementById('description').textContent = `${data.list[0].weather[0].description}`;
      document.getElementById('weatherIcon').src = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@4x.png`;

      // MAIN DAY EXTRA
      document.getElementById('windSpeed').textContent = `Wind: ${data.list[0].wind.speed} km/h`;
      document.getElementById('humidity').textContent = `Humidity: ${data.list[0].main.humidity}%`;

      // OTHER DAYS
      //Day one
      document.getElementById('dayOneIcon').src = `http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png`;
      document.getElementById('dayOneMinMaxTemp').textContent = `${data.list[8].main.temp_min}°C ${data.list[8].main.temp_max}°C`;
      //Day two
      document.getElementById('dayTwoIcon').src = `http://openweathermap.org/img/wn/${data.list[16].weather[0].icon}@2x.png`;
      document.getElementById('dayTwoMinMaxTemp').textContent = `${data.list[16].main.temp_min}°C ${data.list[16].main.temp_max}°C`;
      //Day three
      document.getElementById('dayThreeIcon').src = `http://openweathermap.org/img/wn/${data.list[24].weather[0].icon}@2x.png`;
      document.getElementById('dayThreeMinMaxTemp').textContent = `${data.list[24].main.temp_min}°C ${data.list[24].main.temp_max}°C`;
      //Day four
      document.getElementById('dayFourIcon').src = `http://openweathermap.org/img/wn/${data.list[32].weather[0].icon}@2x.png`;
      document.getElementById('dayFourMinMaxTemp').textContent = `${data.list[32].main.temp_min}°C ${data.list[32].main.temp_max}°C`;
      //Day five
      document.getElementById('dayFiveIcon').src = `http://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png`;
      document.getElementById('dayFiveMinMaxTemp').textContent = `${data.list[39].main.temp_min}°C ${data.list[39].main.temp_max}°C`;
    })




})

let d = new Date();
let today = d.getDay();
let thisDay = d.getDate();
let thisMonth = d.getMonth();
let thisYear = d.getFullYear();
console.log(d)

let todayPlusOne = today + 1;
let todayPlusTwo = today + 2;
let todayPlusThree = today + 3;
let todayPlusFour = today + 4;
let todayPlusFive = today + 5;


function nameOfDay(day) {
  if (day == 1 || day == 8) {
    return `Monday`;
  } 
  else if (day == 2 || day == 9) {
    return `Tuesday`;
  }
  else if (day == 3 || day == 10) {
    return `Wednesday`;
  }
  else if (day == 4 || day == 11) {
    return `Thursday`;
  }
  else if (day == 5 || day == 12) {
    return `Friday`;
  }
  else if (day == 6 || day == 13) {
    return `Saturday`;
  }
  else if (day == 7 || day == 14) {
    return `Sunday`;
  }
}

function nameOfMonth(month) {
  if (month == 1) {
    return `January`;
  } 
  else if (month == 2) {
    return `February`;
  }
  else if (month == 3) {
    return `March`;
  }
  else if (month == 4) {
    return `April`;
  }
  else if (month == 5) {
    return `May`;
  }
  else if (month == 6) {
    return `June`;
  }
  else if (month == 7) {
    return `July`;
  }
  else if (month == 8) {
    return `August`;
  }
  else if (month == 9) {
    return `September`;
  }
  else if (month == 10) {
    return `October`;
  }
  else if (month == 11) {
    return `November`;
  }
  else if (month == 12) {
    return `December`;
  }
}

document.getElementById('date').textContent = `${nameOfDay(today)}, ${nameOfMonth(thisMonth)} ${thisDay}, ${thisYear}`;
document.getElementById("dayOneName").textContent = `${nameOfDay(todayPlusOne)}`;
document.getElementById("dayTwoName").textContent = nameOfDay(todayPlusTwo);
document.getElementById("dayThreeName").textContent = nameOfDay(todayPlusThree);
document.getElementById("dayFourName").textContent = nameOfDay(todayPlusFour);
document.getElementById("dayFiveName").textContent = nameOfDay(todayPlusFive);