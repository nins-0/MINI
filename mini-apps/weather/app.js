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

document.addEventListener("DOMContentLoaded", function() {
  
  const lat = 1.33;
  const lon = 103.72;

  const crs = new L.Proj.CRS(
    "EPSG:3414",
    "+proj=tmerc +lat_0=1.366666 +lon_0=103.8333333333333 " +
      "+k=1.0 +x_0=28001.642 +y_0=38744.572 +ellps=WGS84 +units=m +no_defs",
    {
      origin: [-58780.82, 57361.53],
      resolutions: [
        1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1, 0.5, 0.25
      ]
    }
  );

  const map = L.map("map", {
    crs: crs,
    center: [lat, lon],
    zoom: 13
  });

  L.tileLayer("https://www.onemap.gov.sg/maps/tiles/Default/{z}/{x}/{y}.png", {
    attribution: '<img src="https://www.onemap.gov.sg/web-assets/images/logo/om_logo.png" style="height:20px;width:20px;"/>&nbsp;<a href="https://www.onemap.gov.sg/" target="_blank" rel="noopener noreferrer">OneMap</a>&nbsp;&copy;&nbsp;contributors&nbsp;&#124;&nbsp;<a href="https://www.sla.gov.sg/" target="_blank" rel="noopener noreferrer">Singapore Land Authority</a>'
  }).addTo(map);

});

