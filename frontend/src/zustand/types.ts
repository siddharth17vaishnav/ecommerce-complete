import { StateCreator } from "zustand";

export type AppStateCreator<T extends Object> = StateCreator<T, [["zustand/devtools", never]]>