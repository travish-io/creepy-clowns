import { sendRequest } from "./dataAccess.js";
const mainContainer = document.querySelector("#container");

mainContainer.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "submitRequest") {
    // Get what the user typed into the form fields
    const userParentName = document.querySelector(
      "input[name='parentName']"
    ).value;
    const userChildName = document.querySelector(
      "input[name='childName']"
    ).value;
    const userNumOfChildren = document.querySelector(
      "input[name='numOfChildren']"
    ).value;
    const userLocation = document.querySelector("input[name='location']").value;
    const userLengthOfReservation = document.querySelector(
      "input[name='lengthOfReservation']"
    ).value;
    const userDate = document.querySelector("input[name='serviceDate']").value;

    // Make an object out of the user input
    const dataToSendToAPI = {
      parentName: userParentName,
      userChildName: userChildName,
      numOfChildren: userNumOfChildren,
      location: userLocation,
      lengthofReservation: userLengthOfReservation,
      serviceDate: userDate,
    };

    // Send the data to the API for permanent storage
    sendRequest(dataToSendToAPI);
  }
});
export const ServiceForm = () => {
  let html = `
        <div class="field">
            <label class="label" for="parentName">Name of Parent</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Name of Child</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="numOfChildren">Number of Children</label>
            <input type="number" name="numOfChildren" class="input" />
        </div>
        <div class="field">
            <label class="label" for="location">Adress</label>
            <input type="address" name="location" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceDate">Date of Reservation</label>
            <input type="date" name="serviceDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="lengthOfReservation">How many Hours</label>
            <input type="number" name="lengthOfReservation" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `;

  return html;
};
