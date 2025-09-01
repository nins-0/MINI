const weather = {
  location: "Singapore Port",
  weather: "Partly Cloudy",
  temperature: "31°C",
  tide: "High tide at 16:00"
};

const container = document.getElementById("weather");

const div = document.createElement("div");
div.className = "weather-card";
div.innerHTML = `
  <h3>📍 ${weather.location}</h3>
  <p>🌤️ Weather: ${weather.weather}</p>
  <p>🌡️ Temp: ${weather.temperature}</p>
  <p>🌊 Tide: ${weather.tide}</p>
`;
container.appendChild(div);
