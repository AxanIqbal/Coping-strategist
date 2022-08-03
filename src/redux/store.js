// import {createStore, applyMiddleware, compose} from 'redux';
// import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from './slicers';
import { backEndApi } from './apis';
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const storage = new MMKV();
//
// export const reduxStorage = {
//   setItem: (key, value) => {
//     storage.set(key, value);
//     return Promise.resolve(true);
//   },
//   getItem: (key) => {
//     const value = storage.getString(key);
//     return Promise.resolve(value);
//   },
//   removeItem: (key) => {
//     storage.delete(key);
//     return Promise.resolve();
//   },
// };

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'location'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(backEndApi.middleware),
});

export default store;

setupListeners(store.dispatch);
