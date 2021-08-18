import { Requests } from "./Requests.js";
import { ServiceForm } from "./serviceForm.js";

export const CreepyClown = () => {
  return `
    <h1>Creepy Clowns</h1>
    <section class="serviceForm">
    ${ServiceForm()}
    </section>

    <section class="serviceRequests">
        <h2>Service Requests</h2>
        ${Requests()}
    </section>
    `;
};
