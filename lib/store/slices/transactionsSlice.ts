import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GroupedTransactions, Transaction } from "../../types/Transaction";
import { RootState } from "../store";

export interface TransactionSliceState {
  list: Transaction[];
  grouped: GroupedTransactions;
}

const initialState: TransactionSliceState = {
  list: [],
  grouped: { income: [], expenses: [] },
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
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

export const getGroupedTransactions = createAsyncThunk("transaction/getGrouped", async (userId: string, thunkAPI) => {
  try {
    const response = await axios.post<{ groupedData: any }>(
      "http://localhost:3001/api/transaction/getGrouped",
      { userId },
      {
        headers: { Accept: "application/json", "Content-Type": "application/json", origin: "http://localhost:3000" },
      }
    );
    console.log(response.data);
    return { ...response.data.groupedData[0], ...response.data.groupedData[1] };
  } catch (error: any) {
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
      state = { ...state, list: [...initialState.list] };
      throw new Error(action.error.message);
    });
    builder.addCase(getTransactions.fulfilled, (state, action) => {
      // Update the state.
      console.log("Fufilled reducer", state);
      state.list = [...state.list, ...action.payload];
      console.log("After reducer", state);
    });
    builder.addCase(getGroupedTransactions.rejected, (state, action) => {
      state = { ...state, grouped: { ...initialState.grouped } };
      throw new Error(action.error.message);
    });
    builder.addCase(getGroupedTransactions.fulfilled, (state, action) => {
      state.grouped = { ...state.grouped, ...action.payload };
    });
  },
});

export const selectTransactions = (state: RootState) => state.transactionReducer;
export const { reset } = transactionSlice.actions;
