const ships = [
  { id: 1, name: "Evergreen Star", imo: "9876543", eta: "2025-08-28 14:30", status: "Anchored", berth: "B2" },
  { id: 2, name: "Maersk Horizon", imo: "9123456", eta: "2025-08-28 19:00", status: "Arrived", berth: "C4" }
];

document.addEventListener("DOMContentLoaded", () => {
  
const container = document.getElementById("ship-list");
const loader = document.getElementById("loader");

loader.style.display = "block";

ships.forEach(ship => {
  const div = document.createElement("div");
  div.className = "ship-card";
  div.innerHTML = `
    <h3>🚢 ${ship.name} (${ship.imo})</h3>
    <p>Status: ${ship.status}</p>
    <p>ETA: ${ship.eta}</p>
    <p>Berth: ${ship.berth}</p>
  `;
  container.appendChild(div);
});

loader.style.display = "none";

});