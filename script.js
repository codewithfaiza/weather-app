async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "70e90e8ed83b0404b247a057616e8da1"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod === 200) {
    document.getElementById("weatherResult").innerHTML = `
      🌆 City: ${data.name} <br>
      🌡️ Temperature: ${data.main.temp} °C <br>
      ☁️ Weather: ${data.weather[0].description} <br>
      💧 Humidity: ${data.main.humidity}% <br>
      💨 Wind: ${data.wind.speed} m/s
    `;
  } else {
    document.getElementById("weatherResult").innerHTML = "❌ City not found!";
  }
}
