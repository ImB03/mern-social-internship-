import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import logger from "redux-logger";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import authSlice from "./reducers/slice/authSlice";
import postSlice from "./reducers/slice/postSlice";
import userSlice from "./reducers/slice/userSlice";
import searchSlice from "./reducers/slice/searchSlice";
import slice from "./reducers/slice/slice";
import AuthSaga from "./reducers/saga/authSaga";
import PostSaga from "./reducers/saga/postSaga";
import UserSaga from "./reducers/saga/userSaga";
import SearchSaga from "./reducers/saga/searchSaga";
import PostState from "./hook/context/state";

const saga = createSagaMiddleware();

const persistConfig = {
  key: "root",
  // version: 1,
  storage,
};

const rootReducer = combineReducers({
  auth: authSlice,
  post: postSlice,
  user: userSlice,
  search: searchSlice,
  slice: slice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// STORE

const store = configureStore({
  reducer: {
    persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // serializableCheck: {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
      serializableCheck: false,
    }).concat(saga),
});

// export const store = configureStore({
//   reducer: {
//     post: postSlice,
//     auth: authSlice,
//   },
//   middleware: [saga],
// });

const persistor = persistStore(store);

saga.run(AuthSaga);
saga.run(PostSaga);
saga.run(UserSaga);
saga.run(SearchSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <PostState>
          <App />
        </PostState>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
