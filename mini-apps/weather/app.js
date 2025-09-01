// const weather = {
//   location: "Singapore Port",
//   weather: "Partly Cloudy",
//   temperature: "31°C",
//   tide: "High tide at 16:00"
// };

// const container = document.getElementById("weather");

// document.addEventListener("DOMContentLoaded", () => {
//   const lat = 1.33;
//   const lon = 103.72;

//   const container = document.getElementById("weather");
//   const div = document.createElement("div");
//   div.className = "weather-card";
//   div.innerHTML = `
//     <h3>📍 ${weather.location}</h3>
//     <p>🌤️ Weather: ${weather.weather}</p>
//     <p>🌡️ Temp: ${weather.temperature}</p>
//     <p>🌊 Tide: ${weather.tide}</p>
//   `;
//   container.appendChild(div);

//   // const map = L.map("map").setView([lat, lon], 13);

//   // L.tileLayer("https://www.onemap.gov.sg/maps/tiles/Default/{z}/{x}/{y}.png", {
//   //   attribution:
//   //     '<img src="https://www.onemap.gov.sg/web-assets/images/logo/om_logo.png" style="height:20px;width:20px;"/>&nbsp;' +
//   //     '<a href="https://www.onemap.gov.sg/" target="_blank">OneMap</a> &copy; contributors | ' +
//   //     '<a href="https://www.sla.gov.sg/" target="_blank">Singapore Land Authority</a>'
//   // }).addTo(map);

//   // setTimeout(() => map.invalidateSize(), 300);

// });


function formatTimePeriod(period) {
  const start = new Date(period.start);
  const end = new Date(period.end);

  const optionsTime = { hour: "numeric", minute: undefined, hour12: true, timeZone: "Asia/Singapore" };
  const optionsDate = { day: "numeric", month: "short" , timeZone: "Asia/Singapore"};

  const startTime = start.toLocaleTimeString("en-US", optionsTime);
  const endTime = end.toLocaleTimeString("en-US", optionsTime);
  const endDate = end.toLocaleDateString("en-US", optionsDate);

  return `${startTime} – ${endTime}, ${endDate}`;
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("weather");

  const response = await fetch("https://api-open.data.gov.sg/v2/real-time/api/twenty-four-hr-forecast");
  const data = await response.json();

  if (data.code === 0 && data.data.records.length > 0) {
    const record = data.data.records[0];
    const general = record.general;
    const periods = record.periods;

    const div = document.createElement("div");
    div.className = "weather-card";

    let html = `
      <h3>📍 Singapore Weather</h3>
      <p>🌤️ Weather: ${general.forecast.text}</p>
      <p>🌡️ Temp: ${general.temperature.low}°C - ${general.temperature.high}°C</p>
      <p>💧 Humidity: ${general.relativeHumidity.low}% - ${general.relativeHumidity.high}%</p>
      <p>💨 Wind: ${general.wind.speed.low}-${general.wind.speed.high} km/h ${general.wind.direction}</p>
      <hr>
      <h4>Region-specific Forecasts:</h4>
    `;

    periods.forEach(period => {
      const periodCard = document.createElement("div");
      periodCard.className = "weather-card region-card";

      periodCard.innerHTML = `<h4>${formatTimePeriod(period.timePeriod)}</h4>`;

      const regionsDiv = document.createElement("div");
      regionsDiv.style.display = "flex";
      regionsDiv.style.flexWrap = "wrap";
      regionsDiv.style.gap = "10px";

      Object.entries(period.regions).forEach(([region, info]) => {
        const regionBox = document.createElement("div");
        regionBox.style.flex = "1 1 100px";
        regionBox.style.padding = "8px";
        regionBox.style.border = "1px solid #ccc";
        regionBox.style.borderRadius = "6px";
        regionBox.style.textAlign = "center";
        regionBox.innerHTML = `
          <strong>${capitalizeFirstLetter(region)}</strong><br>
          ${info.text}
        `;
        regionsDiv.appendChild(regionBox);
      });

      periodCard.appendChild(regionsDiv);
      container.appendChild(periodCard);
    });

    div.innerHTML = html;
    container.appendChild(div);

  } else {
    container.innerHTML = "<p>Unable to fetch weather data.</p>";
  }
});




