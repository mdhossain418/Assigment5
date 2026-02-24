let jobs = [
  { id:1, company:"Mobile First Corp", title:"React Native Developer", location:"Remote", salary:"$130k - $175k", status:"none" },
  { id:2, company:"WebFlow Agency", title:"Web Designer", location:"LA", salary:"$80k - $120k", status:"none" },
  { id:3, company:"DataViz", title:"Data Specialist", location:"Boston", salary:"$120k", status:"none" },
  { id:4, company:"CloudFirst", title:"Backend Dev", location:"Seattle", salary:"$140k", status:"none" },
  { id:5, company:"Innovation Labs", title:"UI/UX", location:"Austin", salary:"$110k", status:"none" },
  { id:6, company:"MegaCorp", title:"JS Dev", location:"NY", salary:"$130k", status:"none" },
  { id:7, company:"StartupXYZ", title:"Full Stack", location:"Remote", salary:"$120k", status:"none" },
  { id:8, company:"TechCorp", title:"Frontend Dev", location:"SF", salary:"$135k", status:"none" },
];

let currentFilter = "all";

function updateCounters() {
  document.getElementById("total-count").innerText = jobs.length;
  document.getElementById("interview-count").innerText = jobs.filter(j=>j.status==="interview").length;
  document.getElementById("rejected-count").innerText = jobs.filter(j=>j.status==="rejected").length;
}
function setActive(btnId) {
  ["btn-all","btn-interview","btn-rejected"].forEach(id=>{
    document.getElementById(id).className =
      "px-4 py-2 bg-gray-200 rounded-lg text-sm";
  });
  document.getElementById(btnId).className =
    "px-4 py-2 bg-blue-600 text-white rounded-lg text-sm";
}

function filterJobs(type) {
  currentFilter = type;
  setActive("btn-"+type);
  renderJobs();
}

function changeStatus(id, status) {
  const job = jobs.find(j=>j.id===id);
  job.status = status;
  updateCounters();
  renderJobs();
}
/* DELETE FUNCTION */
function deleteJob(id) {
  jobs = jobs.filter(j => j.id !== id);
  updateCounters();
  renderJobs();
}

function renderJobs() {
  const list = document.getElementById("job-list");
  const noJobs = document.getElementById("no-jobs");
  const filterCount = document.getElementById("filter-count");

  list.innerHTML = "";

  let filtered = jobs;
  if (currentFilter !== "all") {
    filtered = jobs.filter(j => j.status === currentFilter);
  }
   filterCount.innerText = `${filtered.length} of ${jobs.length} jobs`;

  if (filtered.length === 0) {
    noJobs.classList.remove("hidden");
  } else {
    noJobs.classList.add("hidden");
  }

  filtered.forEach(job => {

    let badge = "";
    let border = "border-l-4 border-transparent";

    if (job.status === "interview") {
      badge = `<span class="inline-block mb-3 px-3 py-1 text-xs bg-green-100 text-green-600 rounded">INTERVIEW</span>`;
      border = "border-l-4 border-green-500";
    }

    if (job.status === "rejected") {
      badge = `<span class="inline-block mb-3 px-3 py-1 text-xs bg-red-100 text-red-600 rounded">REJECTED</span>`;
      border = "border-l-4 border-red-500";
    }