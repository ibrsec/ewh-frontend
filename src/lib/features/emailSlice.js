import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  emails: [],
  // page: 1,
  // search: "",
  pagination: {
    search: {},
    page: 1,
    limit: 10,
    pages: false,
    totalRecords: 10,
  },
  loading: false,
  error: false,
};

const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    fetchEmailStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    fetchEmailFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    fetchEmailSuccess: (state, { payload }) => {
      state.loading = false;
      state.emails = payload?.data;
      state.pagination = payload?.details;
    },
    fetchEmailSuccessWithOutPayload: (state) => {
      state.loading = false;
    },
    fetchEmailLogout: (state) => {
      state.emails = [];
    },
    // fetchEmailSetPage: (state, { payload }) => {
    //   state.page = payload;
    // },
    // fetchEmailSetSearch: (state, { payload }) => {
    //   state.page = 1;
    //   state.search = payload;
    // },
  },
});

export const {
  fetchEmailStart,
  fetchEmailFail,
  fetchEmailSuccess,
  fetchEmailSuccessWithOutPayload,
  fetchEmailLogout,
  // fetchEmailSetPage,
  // fetchEmailSetSearch,
} = emailSlice.actions;
export default emailSlice.reducer;
