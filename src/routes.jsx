import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ChronosScreen from "./screens/Chronos";
import ListScreen from "./screens/List";
import TimerScreen from "./screens/Chronos";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeScreen() {
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

export default function Routes() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" Screen component={HomeScreen} />
                <Drawer.Screen name="List" Screen component={ListScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
