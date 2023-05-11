import { SnackbarSeverity } from "../types/snackbar.types"
import { StoreType } from "../zustand"
import { setToken } from "./tokens"

interface ApiResponseProps {
    accessToken: string
    refreshToken: string
}


export const handleAuthError = (state: StoreType, message: string) => {
    state.setSnackbar({ message: message, severity: SnackbarSeverity.error })
}

export const handleAuthSuccess = (state: StoreType, response: ApiResponseProps) => {
    setToken("accessToken", response.accessToken)
    setToken("refreshToken", response.refreshToken)
    state.setSnackbar({ message: 'Login Successfully', severity: SnackbarSeverity.success })

}