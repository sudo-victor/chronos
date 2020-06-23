import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ChronosScreen from "./screens/Chronos";
import ListScreen from "./screens/List";
import SingleItemScreen from "./screens/SingleItem";
import TimerScreen from "./screens/Chronos";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Home() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Chronos" component={ChronosScreen} />
            <Stack.Screen name="Timer" component={TimerScreen} />
        </Stack.Navigator>
    );
}

function List() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="ListItems" component={ListScreen} />
            <Stack.Screen name="Single Item" component={SingleItemScreen} />
        </Stack.Navigator>
    );
}

export default function Routes() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" Screen component={Home} />
                <Drawer.Screen name="List" Screen component={List} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
