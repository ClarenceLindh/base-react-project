/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { articleApi } from "api/services";

export interface ArticleSlice {
  articles: any;
  loading: boolean;
  error: any;
  responseHeaders: any;
}

const INITIAL_STATE = {
  articles: null,
  loading: false,
  error: null,
  responseHeaders: null,
} as ArticleSlice;

export const getAllArticles = createAsyncThunk(
  "article/getAllArticles",
  articleApi.getAllArticles,
);

const articleSlice = createSlice({
  name: "post",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllArticles.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.articles = action.payload.data;
        state.responseHeaders = {
          contentType: action.payload.headers["content-type"],
          contentLength: action.payload.headers["content-length"],
        };
      })
      .addCase(getAllArticles.rejected, (state, action) => {
        state.loading = false;
        state.articles = null;
        state.error = action.payload;
      });
  },
});

export default articleSlice.reducer;
