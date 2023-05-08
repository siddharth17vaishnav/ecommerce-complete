import { isServer } from "@/src/constants/flags"

// set token to localStorage
export const setAccessToken = (value: string) => {
    if (!isServer && value) {
        localStorage.setItem("token", JSON.stringify(value));
        const today = new Date();
        today.setHours(today.getHours() + 24)
        localStorage.setItem("token_expires_on", JSON.stringify(today))
    }
    return;
}

//get token from localStorage
export const getAccessToken = () => !isServer && JSON.parse(localStorage.getItem("token") || 'null')

//get tokenExpiration from localStorage
export const getTokenExpiration = () => !isServer && JSON.parse(localStorage.getItem("token_expires_on") || 'null')

// remove token and expiration from localStorage
export const removeAccessToken = () => {
    if (!isServer) {
        localStorage.removeItem("token")
        localStorage.removeItem("token_expires_on")
    }
    return;
}
