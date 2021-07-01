import { baseUrl } from "../../constants"

export const Authenticate = (username, password) => {

   const token = window.btoa(`${username}:${password}`)

    return window.fetch(`${baseUrl}session`, {
        headers: {
            Authorization: `Basic ${token}`
        }
    }).then(resp => resp.json())
        .then(data => data)
}
