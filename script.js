document.getElementById('submit').addEventListener('click', function (event) {
  let cityInput = document.getElementById('cityInput').value;
  console.log(cityInput);

 const api = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&units=metric&appid=655a19af3d0a8572719255b11fb9c8d0`

fetch(api)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(data.list[2].weather[0].description)
      document.getElementById('cityName').textContent = data.city.name;

      
      document.getElementById('sunrise').textContent = data.city.sunrise;
      document.getElementById('sunset').textContent = data.city.sunset;
    })
 
})