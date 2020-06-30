import React, { useState, useCallback } from "react";
import { Provider } from "react-redux";
import { AppLoading } from "expo";
import { PersistGate } from "redux-persist/integration/react";
import { FontAwesome, AntDesign, Ionicons, Feather } from "@expo/vector-icons";
import * as Font from "expo-font";

import { store, persistor } from "./store/index";

import Routes from "./routes";

export default function Main() {
    const [isLoading, setIsLoading] = useState(true);

    const onFinish = useCallback(() => {
        setIsLoading(false);
    }, [setIsLoading]);

    const loadIcons = useCallback(async () => {
        setIsLoading(true);

        return await Font.loadAsync({
            ...FontAwesome.font,
            ...AntDesign.font,
            ...Ionicons.font,
            ...Feather.font,
        });
    }, [setIsLoading]);

    return (
        <>
            {isLoading ? (
                <AppLoading startAsync={loadIcons} onFinish={onFinish} />
            ) : (
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <Routes />
                    </PersistGate>
                </Provider>
            )}
        </>
    );
}
