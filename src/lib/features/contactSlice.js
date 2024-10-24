import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contactInfos: [],
  page: 1,
  search: "",
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

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    fetchContactStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    fetchContactFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    fetchContactSuccess: (state, { payload }) => {
      state.loading = false;
      state.contactInfos = payload?.data;
      state.pagination = payload?.details;
    },
    fetchContactSuccessWithOutPayload: (state) => {
      state.loading = false;
    },
    fetchContactLogout: (state) => {
      state.contactInfos = [];
    },
    fetchContactSetPage: (state, { payload }) => {
      state.page = payload;
    },
    fetchContactSetSearch: (state, { payload }) => {
      state.page = 1;
      state.search = payload;
    },
  },
});

export const {
  fetchContactStart,
  fetchContactFail,
  fetchContactSuccess,
  fetchContactSuccessWithOutPayload,
  fetchContactLogout,
  fetchContactSetPage,
  fetchContactSetSearch,
} = contactSlice.actions;
export default contactSlice.reducer;
