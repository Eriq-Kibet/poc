import { baseUrl } from "../../constants";

export const registerPatient = (username, password) => {
  const token = window.btoa(`${username}:${password}`);
  const body = JSON.stringify({
    names: [{ givenName: "Mohit", familyName: "Kumar" }],
    gender: "M",
    birthdate: "1997-09-02",
    addresses: [
      {
        address1: "30, Vivekananda Layout, Munnekolal,Marathahalli",
        cityVillage: "Bengaluru",
        country: "India",
        postalCode: "560037",
      },
    ],
  });
  return window
    .fetch(`${baseUrl}person`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${token}`,
      }`${body}`,
    })
    .then((resp) => resp.json())
    .then((data) => data);
};
