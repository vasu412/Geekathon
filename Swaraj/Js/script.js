import Results from "./results.js";

const displayResults = () => {
  const resultsContainer = document.getElementById("resultsContainer");
  resultsContainer.innerHTML = "";

  const heading = document.createElement("h1");
  heading.innerHTML = "2023 RACE RESULTS";
  resultsContainer.append(heading);

  const table = document.createElement("table");
  table.classList.add("resultsTable");

  // Create table header
  const tableHeader = document.createElement("thead");
  tableHeader.innerHTML = `
    <tr>
      <th>Grand Prix</th>
      <th>Date</th>
      <th>Winner</th>
      <th>Car</th>
      <th>Laps</th>
      <th>Time</th>
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

// if (currentIndex == 0) {
//   upButton.classList.add("");
// }

upButton.addEventListener("click", () => {
  currentIndex = Math.max(currentIndex - 3, 0);
  dateCol.children[currentIndex].scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

downButton.addEventListener("click", () => {
  currentIndex = Math.min(currentIndex + 3, dateCol.children.length - 1);
  console.log(currentIndex);
  dateCol.children[currentIndex].scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});
