import { configureStore } from "@reduxjs/toolkit";
import { tasksApi } from "./services/tasksServices";
import todo from "./todoSlice";


export const store = configureStore({
  reducer: {
    todo,
    [tasksApi.reducerPath]: tasksApi.reducer,
  },
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware().concat(tasksApi.middleware)
  )
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;