import { createSlice } from "@reduxjs/toolkit";
import { getAllPackagesThunk } from "../services/package-service";
import { packagesState } from "../types";

const initialState: packagesState = {
  items: [],
  isLoading: false,
  error: false,
};

const packagesSlice = createSlice({
  name: "packages",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getAllPackagesThunk.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(getAllPackagesThunk.fulfilled, (state, action) => {
      state.items = action.payload?.data.packages;
      state.isLoading = false;
      state.error = false;
      console.log("all packages fetched successfully", state.items);
    });
    builder.addCase(getAllPackagesThunk.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});

export default packagesSlice.reducer;
