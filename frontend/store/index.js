import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/auth/loginSlice"
import signUpreducer from "../features/auth/signupSlice"
import settingReducer from "../features/setting/settingSlice"
import previewSlice from "../features/preview/previewSlice";
import storage from 'redux-persist/lib/storage'
import {persistStore} from 'redux-persist'

import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

const persistConfig = {
key: 'root',
storage: storage,
blacklist: ['apiProductSlice'],
}

const persistedReducer = persistReducer(persistConfig, combineReducers({
    login: loginReducer,
    signUp: signUpreducer,
    setting: settingReducer,
    preview: previewSlice,
}));

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

const persistor = persistStore(store);

export { store, persistor };