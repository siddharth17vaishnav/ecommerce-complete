import { Nullable } from "@/src/types/main"
import { AppStateCreator } from "../types"
import { fetchAction } from "@/src/utils/api.utils"
import { endpoints } from "@/src/constants/endpoints"
import { handleAuthError, handleAuthSuccess } from "@/src/utils/auth.utils"
import { StoreType } from ".."
import { getAccessToken } from "@/src/utils/tokens"

export interface AuthSlice {
    user: Nullable<Record<string, string | number | boolean>>
    login: (value: any) => any
}

const createAuthSlice: AppStateCreator<AuthSlice> = (set, get) => ({
    user: null,
    getUser: () => get().user,
    login: async (value) => {
        const state = get()
        const res = await fetchAction({ url: endpoints.login, data: value, method: 'POST' })

        if (res.error) {
            const message = res.error.message
            handleAuthError(state as StoreType, message)
            return null;
        }
        const response = res.data;
        set((state) => ({ ...state, user: response.user }))
        handleAuthSuccess(state as StoreType, response)
        return response
    },
    fetchUser: async () => {
        const accessToken = getAccessToken()
        const user = get().user
        if (accessToken) {
            const user = await fetchAction({})
        }
    }
})

export default createAuthSlice