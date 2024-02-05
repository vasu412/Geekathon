import Results from "./results.js";

const displayResults = () => {
  const resultsContainer = document.getElementById("resultsContainer");
  resultsContainer.innerHTML = "";

  const table = document.createElement("table");
  table.classList.add("resultsTable");

  // Create table header
  const tableHeader = document.createElement("thead");
  tableHeader.innerHTML = `
    <tr>
      <th class="resultName">Grand Prix</th>
      <th class="resultDate">Date</th>
      <th class="resultWinner">Winner</th>
      <th class="resultCar">Car</th>
      <th class="resultLaps">Laps</th>
      <th class="resultTime">Time</th>
    </tr>
  `;
  table.appendChild(tableHeader);

  // Created table body
  const tableBody = document.createElement("tbody");
  Results.forEach((result) => {
    const row = document.createElement("tr");
    row.classList.add("tableEle");

    row.innerHTML = `
      <td class="resultName">${result.name}</td>
      <td class="resultDate">${result.date}</td>
      <td class="resultWinner">${result.winner}</td>
      <td class="resultCar">${result.car}</td>
      <td class="resultLaps">${result.laps}</td>
      <td class="resultTime">${result.time}</td>
    `;
    tableBody.appendChild(row);
  });
  table.appendChild(tableBody);
  resultsContainer.appendChild(table);
};

window.onload = displayResults;

// year scroller col start
const dateCol = document.getElementById("dateRaceAllCol");
const upButton = document.getElementById("upButton");
const downButton = document.getElementById("downButton");

const year = new Date();

for (var i = year.getFullYear(); i >= 1950; i--) {
  const data = document.createElement("div");
  // const data = document.createElement("a");
  data.classList.add("yearData");
  data.innerHTML = `${i}`;
  dateCol.appendChild(data);
}

let currentIndex = 0;

upButton.addEventListener("click", (event) => {
  event.preventDefault();
  currentIndex = Math.max(currentIndex - 3, 0);
  dateCol.children[currentIndex].scrollIntoView({
    behavior: "smooth",
    block: "nearest", // Align to the nearest edge of the scroll container
  });
});

downButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default behavior of the button
  currentIndex = Math.min(currentIndex + 3, dateCol.children.length - 1);
  dateCol.children[currentIndex].scrollIntoView({
    behavior: "smooth",
    block: "nearest", // Align to the nearest edge of the scroll container
  });
});

// select Tab for the years
const selectYr = document.getElementById("yearsSelect");
for (var i = year.getFullYear(); i >= 1950; i--) {
  const data = document.createElement("option");
  // const data = document.createElement("a");
  data.classList.add("selectYearData");
  data.innerHTML = `${i}`;
  selectYr.appendChild(data);
}
// year scroller col end

const country = document.getElementById("f1CountryContent");
const countryUp = document.getElementById("upButtonCountry");
const countryDown = document.getElementById("downButtonCountry");

let coutryIdx = 0;

countryUp.addEventListener("click", (event) => {
  event.preventDefault();
  coutryIdx = Math.max(coutryIdx - 4, 0);
  console.log(country.children[coutryIdx]);
  country.children[coutryIdx].scrollIntoView({
    behavior: "smooth",
    block: "nearest",
  });
});

countryDown.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default behavior of the button
  coutryIdx = Math.min(coutryIdx + 4, country.children.length - 1);
  console.log(country.children[coutryIdx]);
  country.children[coutryIdx].scrollIntoView({
    behavior: "smooth",
    block: "nearest",
  });
});
