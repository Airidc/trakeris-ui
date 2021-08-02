import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { Context, createWrapper, HYDRATE, MakeStore } from "next-redux-wrapper";
import { combineReducers, Store, AnyAction, Action } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { appConfigSlice } from "./slices/appConfigSlice";

const combinedReducers = combineReducers({
  appConfigReducer: appConfigSlice.reducer,
});

export type RootState = ReturnType<typeof combinedReducers>;

const rootReducer = (state: RootState, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return <RootState>nextState;
  }

  return combinedReducers(state, action);
};

export const store = configureStore<RootState>({
  // @ts-ignore
  reducer: rootReducer,
});

const makeStore: MakeStore<Store> = (context: Context) => store;

export const wrapper = createWrapper(makeStore);

// Type that will be used to type useDispatch() for async actions.
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
