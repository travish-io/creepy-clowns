import { fetchRequests } from "./dataAccess.js";
import { CreepyClown } from "./CreepyClowns.js";
const mainContainer = document.querySelector("#container");
mainContainer.addEventListener("stateChanged", (customEvent) => {
  console.log(customEvent);
  return render();
});

const render = () => {
  fetchRequests().then(() => {
    mainContainer.innerHTML = CreepyClown();
  });
};

render();
