import { baseUrl } from "../../../constants";

export const Encounters = (patientUuid) => {
  return window
    .fetch(`${baseUrl}encounter?q=${patientUuid}&v=default&limit=`)
    .then((resp) => resp.json())
    .then((result) => {
      console.log(result);
      return result.results
    })
    .catch((error) => console.log("error", error));
};
