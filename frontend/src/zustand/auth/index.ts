import { Nullable } from "@/src/types/main"
import { AppStateCreator } from "../types"
import { fetchAction } from "@/src/utils/api.utils"
import { endpoints } from "@/src/constants/endpoints"
import { handleAuthError, handleAuthSuccess, handleUnAuthenticatedUser } from "@/src/utils/auth.utils"
import { StoreType } from ".."
import { IUser } from "@/src/types/User.types"

export interface AuthSlice {
    user: Nullable<Record<string, string | number | boolean>>
    login: (value: { email?: string, password?: string }) => Promise<IUser>
    fetchUser: () => Promise<IUser>
}

const createAuthSlice: AppStateCreator<AuthSlice> = (set, get) => ({
    user: null,
    getUser: () => get().user,
    login: async (value) => {
        const state = get() as StoreType
        const res = await fetchAction({ url: endpoints.login, data: value, method: 'POST' })
        state.enableLoader()
        if (res.error) {
            const message = res.error.message
            handleAuthError(state as StoreType, message)
            state.disableLoader()
            return null;
        }
        const response = res.data;
        delete response.user.password
        set((state) => ({ ...state, user: response.user }))
        handleAuthSuccess(state as StoreType, response)
        state.disableLoader()
        return response
    },
    fetchUser: async () => {
        const state = get() as StoreType
        const UserID = localStorage.getItem("userId")
        if (!UserID) return null;

        const res = await fetchAction({ url: endpoints.fetch_user(Number(UserID)), method: 'POST' })
        state.enableLoader()
        if (res.error) {
            const message = res.error.message
            handleUnAuthenticatedUser(state as StoreType, message)
            state.disableLoader()
            return null;
        }
        const response = res.data.data;
        delete response.password
        set((state) => ({ ...state, user: response }))
        state.disableLoader()
        return response
    }
})

export default createAuthSlice