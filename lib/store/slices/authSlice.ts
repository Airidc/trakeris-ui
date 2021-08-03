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
import { appConfigSlice } from "./appConfigSlice";

export enum AuthStates {
  idle = "Idle",
  loading = "loading",
}

export interface AuthSliceState {
  accessToken: string;
  loading: AuthStates;
  user?: User;
  error?: SerializedError;
}

const initialState = {
  accessToken: "",
  loading: AuthStates.idle,
  user: undefined,
};

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: { username: string; password: string }, thunkAPI) => {
    try {
      const response = await axios.post<{ status: string; user: User }>(
        "http://localhost:3001/api/auth/login",
        { username: credentials.username, password: credentials.password }
      );
      console.log(response);
      return response.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAccessToken(
      state: AuthSliceState,
      action: PayloadAction<{ token: string }>
    ) {
      state.accessToken = action.payload.token;
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
      state.user = <User>action.payload;
      state.loading = AuthStates.idle;
    });
  },
});
