import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import createAuthSlice, { AuthSlice } from './auth';
import createSnackbarSlice, { SnackbarSlice } from './snackbar';

export type StoreType = AuthSlice & SnackbarSlice

const useStore = create<StoreType>()(
    devtools((...args) => ({
        ...createAuthSlice(...args),
        ...createSnackbarSlice(...args),
    }))
)

export default useStore;