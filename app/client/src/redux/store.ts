import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import packagesReducer from "../slices/packageSlice";

export const store = configureStore({
  reducer: {
    packages: packagesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
