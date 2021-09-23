import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
  PayloadAction,
  SerializedError,
} from "@reduxjs/toolkit";
import axios from "axios";
import { UserDTO } from "../../DTO/userDTO";
import { User } from "../../types/User";
import { RootState } from "../store";
import { appConfigSlice } from "./appConfigSlice";
import Router from "next/router";

export enum AuthStates {
  idle = "Idle",
  loading = "loading",
}

interface LoginResponse {
  status: string;
  user: User;
  refreshToken: string;
  refreshTokenExpiry: number;
}

export interface AuthSliceState {
  refreshToken: string;
  refreshTokenExpiry: number;
  loading: AuthStates;
  user: User | undefined;
  error?: SerializedError;
}

const initialState = {
  refreshToken: "",
  refreshTokenExpiry: 0,
  loading: AuthStates.idle,
  user: <User>{
    id: "b73c4d26-ce6c-4d6f-9f8d-1d90355c4567",
    username: "Airidc69",
    email: "test33s@tes2.test21",
    createdAt: "1626726718215",
    userRole: "user",
    profilePicPath: "",
    firstName: "",
    lastName: "",
    currency: "EUR",
  },
};

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: { username: string; password: string }, thunkAPI) => {
    try {
      const response = await axios.post<LoginResponse>("http://localhost:3001/api/auth/login", {
        username: credentials.username,
        password: credentials.password,
      });
      console.log(response);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateRefreshToken(
      state: AuthSliceState,
      action: PayloadAction<{ refreshToken: string; refreshTokenExpiry: number }>
    ) {
      state.refreshToken = action.payload.refreshToken;
      state.refreshTokenExpiry = action.payload.refreshTokenExpiry;
    },
    reset: () => initialState,
  },
  extraReducers: (builder: ActionReducerMapBuilder<AuthSliceState>) => {
    builder.addCase(login.rejected, (state, action) => {
      state = { ...initialState, error: action.error };
      throw new Error(action.error.message);
    });
    builder.addCase(login.fulfilled, (state, action) => {
      // Update the state.
      console.log("LOGGED IN");
      state.user = action.payload.user;
      state.refreshToken = action.payload.refreshToken;
      state.refreshTokenExpiry = action.payload.refreshTokenExpiry;
      state.loading = AuthStates.idle;
      Router.push("/dashboard");
    });
  },
});

export const selectUserData = (state: RootState) => state.authReducer;
