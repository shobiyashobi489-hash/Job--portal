const jobs = [
  { title: "Frontend Developer", company: "Google", salary: "10 LPA", location: "Chennai", role: "Developer" },
  { title: "UI Designer", company: "Amazon", salary: "8 LPA", location: "Bangalore", role: "Designer" }
];

let savedJobs = [];

function displayJobs(jobArray, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  jobArray.forEach((job, index) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="https://via.placeholder.com/50">
      <h3>${job.title}</h3>
      <p>${job.company}</p>
      <p>${job.salary}</p>
      <p>${job.location}</p>
      <button onclick="saveJob(${index})">Save</button>
    `;

    container.appendChild(card);
  });
}

function saveJob(index) {
  savedJobs.push(jobs[index]);
  displayJobs(savedJobs, "savedJobs");
}

function filterJobs() {
  const search = document.getElementById("search").value.toLowerCase();
  const company = document.getElementById("companyFilter").value;
  const role = document.getElementById("roleFilter").value;

  const filtered = jobs.filter(job => {
    return (
      job.title.toLowerCase().includes(search) &&
      (company === "" || job.company === company) &&
      (role === "" || job.role === role)
    );
  });

  displayJobs(filtered, "jobList");
}

document.getElementById("search").addEventListener("input", filterJobs);
document.getElementById("companyFilter").addEventListener("change", filterJobs);
document.getElementById("roleFilter").addEventListener("change", filterJobs);

displayJobs(jobs, "jobList");