let InterviewList = [];
let RejectedList = [];
let CurrentStatus = "Allbtn";

const Total = document.getElementById("Total");
const InterviewTotal = document.getElementById("InterviewTotal");
const RejectedTotal = document.getElementById("RejectedTotal");

const TotalSide1 = document.getElementById("TotalSide1");
const TotalSide2 = document.getElementById("TotalSide2");
const TotalSide3 = document.getElementById("TotalSide3");
const of = document.getElementById("of");

const Allbtn = document.getElementById("Allbtn");
const Interviewbtn = document.getElementById("Interviewbtn");
const Rejectedbtn = document.getElementById("Rejectedbtn");

const MainContainer = document.querySelector("main");
const FilteredSection = document.getElementById("FilteredSection");

const AllCards = document.getElementById("AllCards");

function TotalCount() {
  Total.innerText = AllCards.children.length;
  InterviewTotal.innerText = InterviewList.length;
  RejectedTotal.innerText = RejectedList.length;

  TotalSide3.innerText = AllCards.children.length;

  TotalSide1.innerText = InterviewList.length;
  TotalSide2.innerText = RejectedList.length;
}

TotalCount();

function Togglekorbe(id) {
  Allbtn.classList.add("bg-gray-100", "text-black");
  Interviewbtn.classList.add("bg-gray-100", "text-black");
  Rejectedbtn.classList.add("bg-gray-100", "text-black");

  Allbtn.classList.remove("bg-blue-500", "text-white");
  Interviewbtn.classList.remove("bg-blue-500", "text-white");
  Rejectedbtn.classList.remove("bg-blue-500", "text-white");

  const MainId = document.getElementById(id);

  CurrentStatus = id;

  MainId.classList.remove("bg-gray-100", "text-black");
  MainId.classList.add("bg-blue-500", "text-white");

  if (id == "Interviewbtn") {
    AllCards.classList.add("hidden");
    FilteredSection.classList.remove("hidden");

    TotalSide1.classList.remove("hidden");
    TotalSide2.classList.add("hidden");
    of.classList.remove("hidden");
  
    keepInterview();
  } else if (id == "Allbtn") {
    AllCards.classList.remove("hidden");
    FilteredSection.classList.add("hidden");

    TotalSide1.classList.add("hidden");
    TotalSide2.classList.add("hidden");
    TotalSide3.classList.remove('hidden')
    of.classList.add("hidden");
  } else if (id == "Rejectedbtn") {
    AllCards.classList.add("hidden");
    FilteredSection.classList.remove("hidden");
    
    TotalSide1.classList.add("hidden");
    TotalSide2.classList.remove("hidden");
    of.classList.remove("hidden");

    keepRejected();
  }
}

MainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("Interviewed")) {
    const parentNode = event.target.parentNode.parentNode;

    const Company = parentNode.querySelector(".Company").innerText;
    const JobName = parentNode.querySelector(".JobName").innerText;
    const Description = parentNode.querySelector(".Description").innerText;
    const Status = parentNode.querySelector(".Status").innerText;
    const Para = parentNode.querySelector(".Para").innerText;

    parentNode.querySelector(".Status").innerText = "Interview";

    const CardInfo = {
      Company,
      JobName,
      Description,
      Status: "Interview",
      Para,
    };

    const CardExist = InterviewList.find(
      (item) => item.Company == CardInfo.Company,
    );

    if (!CardExist) {
      InterviewList.push(CardInfo);
    }

    RejectedList = RejectedList.filter(
      (item) => item.Company != CardInfo.Company,
    );

    if (CurrentStatus == "Rejectedbtn") {
      keepRejected();
    }

    TotalCount();
  } else if (event.target.classList.contains("Rejected")) {
    const parentNode = event.target.parentNode.parentNode;

    const Company = parentNode.querySelector(".Company").innerText;
    const JobName = parentNode.querySelector(".JobName").innerText;
    const Description = parentNode.querySelector(".Description").innerText;
    const Status = parentNode.querySelector(".Status").innerText;
    const Para = parentNode.querySelector(".Para").innerText;

    parentNode.querySelector(".Status").innerText = "Rejected";

    const CardInfo = {
      Company,
      JobName,
      Description,
      Status: "Rejected",
      Para,
    };

    const CardExist = RejectedList.find(
      (item) => item.Company == CardInfo.Company,
    );

    if (!CardExist) {
      RejectedList.push(CardInfo);
    }

    InterviewList = InterviewList.filter(
      (item) => item.Company != CardInfo.Company,
    );

    if (CurrentStatus == "Interviewbtn") {
      keepInterview();
    }

    TotalCount();
  }
});

function keepInterview() {
  FilteredSection.innerHTML = "";

  for (let i of InterviewList) {
    let div = document.createElement(`div`);
    div.className = "card flex justify-between bg-gray-100 p-4";

    div.innerHTML = `
        <div class="space-y-6">
            <div>
              <h2 class="Company font-bold text-2xl pb-1">${i.Company}</h2>
              <p class="JobName text-gray-500 text-xl">
                ${i.JobName}
              </p>
            </div>

            <div>
              <p class="Description text-gray-500">
                ${i.Description}
              </p>
            </div>

            <div class="space-y-1">
              <button class="Status bg-gray-200 p-2">${i.Status}</button>
              <p class=" Para text-gray-950">
                ${i.Para}
              </p>
            </div>

            <div class="flex space-x-2">
              <button
                class="Interviewed border-green-600 border-1 p-2 px-3 text-green-600 font-semibold rounded-lg"
              >
                INTERVIEW
              </button>
              <button
                class="Rejected border-red-600 border-1 p-2 px-3 text-red-600 font-semibold rounded-lg"
              >
                REJECTED
              </button>
            </div>
          </div>

          <div>
            <i class="fa-solid fa-trash"></i>
          </div>`;

    FilteredSection.appendChild(div);
  }
}

function keepRejected() {
  FilteredSection.innerHTML = "";

  for (let i of RejectedList) {
    let div = document.createElement(`div`);
    div.className = "card flex justify-between bg-gray-100 p-4";

    div.innerHTML = `
        <div class="space-y-6">
            <div>
              <h2 class="Company font-bold text-2xl pb-1">${i.Company}</h2>
              <p class="JobName text-gray-500 text-xl">
                ${i.JobName}
              </p>
            </div>

            <div>
              <p class="Description text-gray-500">
                ${i.Description}
              </p>
            </div>

            <div class="space-y-1">
              <button class="Status bg-gray-200 p-2">${i.Status}</button>
              <p class=" Para text-gray-950">
                ${i.Para}
              </p>
            </div>

            <div class="flex space-x-2">
              <button
                class="Interviewed border-green-600 border-1 p-2 px-3 text-green-600 font-semibold rounded-lg"
              >
                INTERVIEW
              </button>
              <button
                class="Rejected border-red-600 border-1 p-2 px-3 text-red-600 font-semibold rounded-lg"
              >
                REJECTED
              </button>
            </div>
          </div>

          <div>
            <i class="fa-solid fa-trash"></i>
          </div>`;

    FilteredSection.appendChild(div);
  }
}
