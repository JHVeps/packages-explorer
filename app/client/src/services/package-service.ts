import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import reguests from "../reguests";

export const getAllPackagesThunk = createAsyncThunk(
  "packages/fetch",
  async () => {
    const config = {
      method: "GET",
      url: reguests.fetchPackages,
      headers: {},
    };
    try {
      const res = await axios(config);
      console.log("response", res.data);
      return { data: res.data, status: res.status };
    } catch (error) {
      alert(error);
      return;
    }
  }
);
