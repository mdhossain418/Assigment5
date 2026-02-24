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