import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import appReducer from "store/slices/appSlice";
import articleReducer from "store/slices/articleSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    article: articleReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
