const weather = {
  location: "Singapore Port",
  weather: "Partly Cloudy",
  temperature: "31°C",
  tide: "High tide at 16:00"
};

const container = document.getElementById("weather");

document.addEventListener("DOMContentLoaded", () => {
  const lat = 1.33;
  const lon = 103.72;

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

  // Initialize Leaflet map
  const map = L.map("map").setView([lat, lon], 13);

  L.tileLayer("	https://www.onemap.gov.sg/maps/tiles/Default/{z}/{x}/{y}.png", {
    attribution:
      '<img src="https://www.onemap.gov.sg/web-assets/images/logo/om_logo.png" style="height:20px;width:20px;"/>&nbsp;' +
      '<a href="https://www.onemap.gov.sg/" target="_blank">OneMap</a> &copy; contributors | ' +
      '<a href="https://www.sla.gov.sg/" target="_blank">Singapore Land Authority</a>'
  }).addTo(map);

});


