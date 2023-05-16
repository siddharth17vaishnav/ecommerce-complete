import { isServer } from "../constants/flags";

// set token to localStorage
export const setToken = (key: string, value: string) => {
    localStorage.setItem(key, JSON.stringify(value));
    const today = new Date();
    today.setHours(today.getHours() + 24)
    localStorage.setItem("token_expires_on", JSON.stringify(today))
}

//get token from localStorage
// export const getToken = () => localStorage && JSON.parse(localStorage.getItem("accessToken") || 'null')

// remove token and expiration from localStorage
export const removeAccessToken = () => {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    localStorage.removeItem("token_expires_on")
}

export const clearLocalStorage = () => localStorage.clear()
