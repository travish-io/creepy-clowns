const applicationState = {
  requests: [],
};

const API = "http://localhost:8088";
const mainContainer = document.querySelector("#container");

export const sendRequest = (userServiceRequest) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userServiceRequest),
  };

  return fetch(`${API}/requests`, fetchOptions)
    .then((response) => response.json())
    .then(() => {
      mainContainer.dispatchEvent(
        new CustomEvent("stateChanged", {
          detail: {
            someObjId: 1,
          },
        })
      );
    });
};
