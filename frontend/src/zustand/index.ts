import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import createAuthSlice, { AuthSlice } from './auth';
import createSnackbarSlice, { SnackbarSlice } from './snackbar';
import createLoaderSlice, { LoaderSlice } from './loader';

export type StoreType = AuthSlice & SnackbarSlice & LoaderSlice

const useStore = create<StoreType>()(
    devtools((...args) => ({
        ...createAuthSlice(...args),
        ...createSnackbarSlice(...args),
        ...createLoaderSlice(...args)
    }))
)

export default useStore;