const jobs = [
  { id:1, company:"Mobile First Corp", position:"React Native Developer", salary:"$130k-$175k", status:"all" },
  { id:2, company:"WebFlow Agency", position:"Web Designer", salary:"$90k-$120k", status:"all" },
  { id:3, company:"Google", position:"Frontend Dev", salary:"$150k", status:"all" },
  { id:4, company:"Amazon", position:"Backend Dev", salary:"$160k", status:"all" },
  { id:5, company:"Meta", position:"UI Engineer", salary:"$140k", status:"all" },
  { id:6, company:"Netflix", position:"DevOps", salary:"$170k", status:"all" },
  { id:7, company:"Tesla", position:"Software Eng", salary:"$155k", status:"all" },
  { id:8, company:"Adobe", position:"Product Dev", salary:"$135k", status:"all" }
];

const container = document.getElementById("cardsContainer");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const totalCount = document.getElementById("totalCount");
const jobCount = document.getElementById("jobCount");
const tabs = document.querySelectorAll(".tabBtn");

function render(tab="all"){
  container.innerHTML = "";

  let filtered = tab === "all" 
    ? jobs 
    : jobs.filter(job => job.status === tab);

  jobCount.innerText = filtered.length + " jobs";

  if(filtered.length === 0){
    container.innerHTML = `
      <div class="text-center py-20 border border-slate-700 rounded-xl bg-[#1e293b]">
        <h3 class="text-xl mb-2">No Jobs Available</h3>
        <p class="text-gray-400">There are no jobs in this section</p>
      </div>
    `;
    return;
  }

  filtered.forEach(job=>{
    const card = document.createElement("div");
    card.className = "bg-[#1e293b] border border-slate-700 p-6 rounded-xl";

    card.innerHTML = `
      <h3 class="text-lg font-semibold">${job.company}</h3>
      <p class="text-gray-400">${job.position}</p>
      <p class="mt-2 text-sm text-gray-500">${job.salary}</p>

      <div class="flex gap-3 mt-4">
        <button class="interviewBtn bg-green-600 px-3 py-1 rounded text-sm">
          Interview
        </button>
        <button class="rejectBtn bg-red-600 px-3 py-1 rounded text-sm">
          Rejected
        </button>
      </div>
    `;

    card.querySelector(".interviewBtn").onclick = ()=>{
      job.status = job.status === "interview" ? "all" : "interview";
      updateCounts();
      render(tab);
    };

    card.querySelector(".rejectBtn").onclick = ()=>{
      job.status = job.status === "rejected" ? "all" : "rejected";
      updateCounts();
      render(tab);
    };

    container.appendChild(card);
  });
}

function updateCounts(){
  interviewCount.innerText = jobs.filter(j=>j.status==="interview").length;
  rejectedCount.innerText = jobs.filter(j=>j.status==="rejected").length;
  totalCount.innerText = jobs.length;
}

tabs.forEach(btn=>{
  btn.addEventListener("click", ()=>{
    tabs.forEach(t=>t.classList.remove("bg-blue-600"));
    btn.classList.add("bg-blue-600");
    render(btn.dataset.tab);
  });
});

render();
updateCounts();