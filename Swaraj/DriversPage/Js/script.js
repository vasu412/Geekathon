// console.log("wor");
import Drivers from "./drivers.js";

console.log(Drivers);

const driversContainer = document.getElementById("driversContainer");
driversContainer.innerHTML = "";

Drivers.forEach((driver) => {
  const driverCard = document.createElement("div");
  driverCard.classList.add("driverCard");

  //   Dynamic colors
  driverCard.addEventListener("mouseover", function () {
    this.style.borderColor = driver.border;
  });

  driverCard.addEventListener("mouseout", function () {
    this.style.borderColor = "black";
  });
  // Dynamic color ends

  driverCard.innerHTML = `
    <div class="nameFlagCol">
        <div class="nameAndFlag">
            <div class="borderLine" style="border-left: 6px solid ${driver.border};"></div>

            <div>
            <p class="driverName">${driver.name}</p>
            <p class="clubText">${driver.club}</p>
            </div>
        </div>
        <div class="driverFlag"><img src="${driver.flag}" alt="Driver Flag"></div>
    </div>

    <div class="lowerDriverCard">
        <div class="carAndNumber">
            <div class="driverCar"><p>${driver.car}</p></div>
            <div class="driverNumber"><img src="${driver.number}" alt="Driver Number"></div>
        </div>
        <div class="driverImage"><img src="${driver.image}"></div>
    </div>
  `;

  driversContainer.appendChild(driverCard);
});

console.log("wor");
