import { SnackbarSeverity } from "@/src/types/snackbar.types";
import { AppStateCreator } from "../types";

export interface SnackbarSlice {
    snackbarOpen: boolean;
    severity?: SnackbarSeverity;
    autoHideDuration: number;
    message: string;
    setSnackbar: (value: {
        severity?: SnackbarSeverity;
        autoHideDuration?: number;
        message: string;
    }) => void;
    resetSnackbar: () => void;
}

const createSnackbarSlice: AppStateCreator<SnackbarSlice> = (set) => ({
    snackbarOpen: false,
    severity: SnackbarSeverity.info,
    message: '',
    autoHideDuration: 1500,
    setSnackbar: (value) =>
        set((state) => ({
            ...state,
            severity: value.severity ?? SnackbarSeverity.info,
            message: value.message ?? "",
            snackbarOpen: Boolean(value.message),
            autoHideDuration: value.autoHideDuration || 2500,
        })),
    resetSnackbar: () =>
        set((state) => ({
            ...state,
            message: "",
            snackbarOpen: false,
        })),
})

export default createSnackbarSlice