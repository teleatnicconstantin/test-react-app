import { configureStore } from "@reduxjs/toolkit";

import translationSlice from "../features/translation/translation-slice";

export const store = configureStore({
  reducer: {
    translation: translationSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
