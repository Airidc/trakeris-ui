import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface AppConfigState {
  apiUrl: string;
  currentPage: string;
}

const initialState = {
  apiUrl: "http://localhost:3001",
  currentPage: "Homepage",
} as AppConfigState;

export const appConfigSlice = createSlice({
  name: "appConfig",
  initialState: initialState,
  reducers: {
    changeCurrentPage: (
      state: AppConfigState,
      action: PayloadAction<{ currentPage: string }>
    ) => {
      state.currentPage = action.payload.currentPage;
    },
    reset: () => initialState,
  },
});

export const selectAppConfig = (state: RootState) => state.appConfigReducer;
export const { changeCurrentPage, reset } = appConfigSlice.actions;
