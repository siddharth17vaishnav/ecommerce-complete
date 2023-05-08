
// set token to localStorage
export const setToken = (key: string, value: string) => {
    localStorage.setItem(key, JSON.stringify(value));
    const today = new Date();
    today.setHours(today.getHours() + 24)
    localStorage.setItem("token_expires_on", JSON.stringify(today))
}

//get access-token from localStorage
export const getAccessToken = () => JSON.parse(localStorage.getItem("accessToken") || 'null')

//get refresh-token from localStorage
export const getRefreshToken = () => JSON.parse(localStorage.getItem("accessRefresh") || 'null')

//get tokenExpiration from localStorage
export const getTokenExpiration = () => JSON.parse(localStorage.getItem("token_expires_on") || 'null')

// remove token and expiration from localStorage
export const removeAccessToken = () => {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    localStorage.removeItem("token_expires_on")
}
