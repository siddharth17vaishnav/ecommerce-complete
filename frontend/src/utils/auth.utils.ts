import { Routes } from "../constants/Routes";
import { IUser } from "../types/User.types";
import { SnackbarSeverity } from "../types/snackbar.types"
import { StoreType } from "../zustand"
import { clearLocalStorage, setToken } from "./tokens"
import Router from 'next/router';

interface ApiResponseProps {
    accessToken: string
    refreshToken: string
    user: IUser
}


export const handleAuthError = (state: StoreType, message: string) => {
    state.setSnackbar({ message: message, severity: SnackbarSeverity.error })
}

export const handleUnAuthenticatedUser = (state: StoreType, message: string) => {
    state.setSnackbar({ message: message, severity: SnackbarSeverity.error })
    clearLocalStorage()
    Router.push(Routes.LOGIN)
}

export const handleAuthSuccess = (state: StoreType, response: ApiResponseProps) => {
    setToken("accessToken", response.accessToken)
    setToken("refreshToken", response.refreshToken)
    setToken("userId", response.user.id)
    state.setSnackbar({ message: 'Login Successfully', severity: SnackbarSeverity.success })
    Router.push(Routes.HOME)
}