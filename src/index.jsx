import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./store/index";

import Routes from "./routes";

export default function Main() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Routes />
            </PersistGate>
        </Provider>
    );
}
