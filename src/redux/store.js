import { configureStore } from "@reduxjs/toolkit";

import authReducer from './slices/authSlice';
import courseReducer from './slices/courseSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        course: courseReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    devTools: true
});

export default store;