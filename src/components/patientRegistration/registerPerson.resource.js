import { baseUrl } from "../../constants";

// POST Person Endpoint
export const registerPerson = (bodyString) => {
  return window
    .fetch(`${baseUrl}person`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: bodyString,
    })
    .then((resp) => resp.json())
    .then((data) => {
      return data.uuid;
    });
};
// Identifier Endpoint (Gets Display and Identifier UUID)
export const GetIdentifierType = () => {
  return window
    .fetch(`${baseUrl}patientidentifiertype?&v=custom:(display,uuid)`)
    .then((resp) => resp.json())
    .then((result) => {
      return result.results;
    })
    .catch((error) => console.log("error", error));
};
// Location Endpoint (Gets Display and Identifier UUID)
export const LocationList = () => {
  return window
    .fetch(`${baseUrl}location?&v=custom:(display,uuid)`)
    .then((resp) => resp.json())
    .then((result) => {
      return result.results;
    })
    .catch((error) => console.log("error", error));
};

// POST Patient Endpoint
export const registerPatient = (patientBodyString) => {
  return window
    .fetch(`${baseUrl}patient`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: patientBodyString,
    })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      return data
    });
};
