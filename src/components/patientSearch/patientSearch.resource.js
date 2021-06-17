import { baseUrl } from "../../constants";

export const SearchPatient = (patientName) => {
  return window
    .fetch(`${baseUrl}patient?q=${patientName}&v=default&limit=`)
    .then((resp) => resp.json())
    .then((result) => {
      return result.results
    })
    .catch((error) => console.log("error", error));
};
