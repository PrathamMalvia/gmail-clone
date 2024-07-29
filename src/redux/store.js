import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';

const store = configureStore({
    reducer: {
        appSlice: appReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['appSlice/setEmails'],
                ignoredPaths: ['appSlice.emails', 'payload.0.createdAt'],
            },
        }),
});

export default store;
