import { Nullable } from "@/src/types/main"
import { AppStateCreator } from "../types"
import { fetchAction } from "@/src/utils/api.utils"
import { endpoints } from "@/src/constants/endpoints"
import { setToken } from "@/src/utils/tokens"

export interface AuthSlice {
    user: Nullable<Record<string, string | number | boolean>>
    login: (value: any) => any
}

const createAuthSlice: AppStateCreator<AuthSlice> = (set, get) => ({
    user: null,
    getUser: () => get().user,
    login: async (value: any) => {
        const res = await fetchAction({ url: endpoints.login, data: value, method: 'POST' })

        if (res.error) {
            console.log(res.error.message)
            return null;
        }
        const response = res.data;
        setToken("accessToken", response.accessToken)
        setToken("refreshToken", response.refreshToken)
        set((state) => ({ ...state, user: response.user }))
        return response
    }
})

export default createAuthSlice