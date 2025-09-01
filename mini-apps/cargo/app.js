const jobs = [
  { id: "JOB001", description: "Unload 20 containers", assignedTo: "Truck 12", status: "In Progress" },
  { id: "JOB002", description: "Inspect refrigerated cargo", assignedTo: "Worker A", status: "Pending" }
];

const container = document.getElementById("job-list");

loader.style.display = "block";

jobs.forEach(job => {
  const div = document.createElement("div");
  div.className = "job-card";
  div.innerHTML = `
    <h3>📦 ${job.id}</h3>
    <p>${job.description}</p>
    <p>Assigned to: ${job.assignedTo}</p>
    <p>Status: ${job.status}</p>
  `;
  container.appendChild(div);
});

loader.style.display = "none";