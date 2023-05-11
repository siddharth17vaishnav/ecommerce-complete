import { AppStateCreator } from "../types";

export interface LoaderSlice {
    loading: boolean;
    enableLoader: () => void;
    disableLoader: () => void;
}

const createLoaderSlice: AppStateCreator<LoaderSlice> = (set) => ({
    loading: false,
    enableLoader: () => set((state) => ({ ...state, loading: true })),
    disableLoader: () => set((state) => ({ ...state, loading: false })),
});

export default createLoaderSlice;
