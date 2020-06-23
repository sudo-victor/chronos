import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "@react-native-community/async-storage";

import rootReducer from "./reducers";

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
