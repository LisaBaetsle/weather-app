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
      document.getElementById('cityName').textContent = `${data.city.name}`;
      document.getElementById('cityCountryName').textContent = `${data.city.name}, ${data.city.country}`;
      document.getElementById('date').textContent = data.list[0].dt_txt;

      // MAIN DAY INFO
      document.getElementById('temperature').textContent = `${data.list[0].main.temp}°C`;
      document.getElementById('description').textContent = `${data.list[0].weather[0].description}`;
      document.getElementById('weatherIcon').src = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;

      // MAIN DAY EXTRA
      document.getElementById('windSpeed').textContent = `Wind: ${data.list[0].wind.speed} km/h`;
      document.getElementById('humidity').textContent = `Humidity: ${data.list[0].main.humidity}%`;

      // OTHER DAYS
      //Day one
      document.getElementById('dayOneIcon').src = `http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png`;
      document.getElementById('dayOneMinMaxTemp').textContent = `${data.list[8].main.temp_min}°C ${data.list[8].main.temp_max}°C`;
      //Day two
      document.getElementById('dayTwoIcon').src = `http://openweathermap.org/img/wn/${data.list[16].weather[0].icon}@2x.png`;
      document.getElementById('dayTwoMinMaxTemp').textContent = `${data.list[8].main.temp_min}°C ${data.list[16].main.temp_max}°C`;
      //Day three
      document.getElementById('dayThreeIcon').src = `http://openweathermap.org/img/wn/${data.list[24].weather[0].icon}@2x.png`;
      document.getElementById('dayThreeMinMaxTemp').textContent = `${data.list[8].main.temp_min}°C ${data.list[24].main.temp_max}°C`;
      //Day four
      document.getElementById('dayFourIcon').src = `http://openweathermap.org/img/wn/${data.list[32].weather[0].icon}@2x.png`;
      document.getElementById('dayFourMinMaxTemp').textContent = `${data.list[8].main.temp_min}°C ${data.list[32].main.temp_max}°C`;
      //Day five
      document.getElementById('dayFiveIcon').src = `http://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png`;
      document.getElementById('dayFiveMinMaxTemp').textContent = `${data.list[8].main.temp_min}°C ${data.list[39].main.temp_max}°C`;
    })




})