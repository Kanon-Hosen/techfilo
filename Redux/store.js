// import OneProductSlice from "./ProductSlice/OneProductSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { configureStore } from "@reduxjs/toolkit";
import { AppApi } from "./AppApi/AppApi";

const store = configureStore({
  reducer: {
    [AppApi.reducerPath]: AppApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(AppApi.middleware);
  },
});

setupListeners(store.dispatch);
export default store;
