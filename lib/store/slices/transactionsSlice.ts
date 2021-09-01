import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Transaction } from "../../types/Transaction";
import { RootState } from "../store";

export interface TransactionSliceState {
  list: Transaction[];
}

const initialState: TransactionSliceState = {
  list: [],
};

export const getTransactions = createAsyncThunk("transaction/getAll", async (userId: string, thunkAPI) => {
  try {
    const response = await axios.post<{ transactions: Transaction[] }>(
      "http://localhost:3001/api/transaction/getAll",
      { userId },
      {
        headers: { Accept: "application/json", "Content-Type": "application/json", origin: "http://localhost:3000" },
      }
    );
    console.log(response);
    return response.data.transactions;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

export const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder: ActionReducerMapBuilder<TransactionSliceState>) => {
    builder.addCase(getTransactions.rejected, (state, action) => {
      state = initialState;
      throw new Error(action.error.message);
    });
    builder.addCase(getTransactions.fulfilled, (state, action) => {
      // Update the state.
      console.log("Fufilled reducer", state);
      state.list = [...state.list, ...action.payload];
      console.log("After reducer", state);
    });
  },
});

export const selectTransactions = (state: RootState) => state.transactionReducer;
export const { reset } = transactionSlice.actions;
