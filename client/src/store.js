import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./state/reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "artist"],
  blacklist: ["alerts"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWare = [thunk];
const initialState = {};

// const store = createStore(
//   persistedReducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleWare))
// );
export const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export const persistor = persistStore(store);
