import { baseUrl } from "../../constants";

export const EncountersDisplay = (patientuuid) => {


  return window
    .fetch(`${baseUrl}encounter?patient=${patientuuid}&custom:(uuid,display,encounterDatetime,location:(description))&v=default&limit=`)
    .then((resp) => resp.json())
    .then((result) => {
      return result.results;
    })
    .catch((error) => console.log("error", error));
};
