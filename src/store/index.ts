import { configureStore } from '@reduxjs/toolkit';
import { projectApi } from './api/projectApi';
import { enquiryApi } from './api/enquiryApi';

export const store = configureStore({
  reducer: {
    [projectApi.reducerPath]: projectApi.reducer,
    [enquiryApi.reducerPath]: enquiryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(projectApi.middleware, enquiryApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
