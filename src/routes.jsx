import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ChronosScreen from "./screens/Chronos";
import ListScreen from "./screens/List";
import SettingsScreen from "./screens/Settings";
import SingleItemScreen from "./screens/SingleItem";
import TimerScreen from "./screens/Timer";
import CongratsScreen from "./screens/Congrats";
import DrawerContent from "./screens/DrawerContent";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HasMenu() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen name="Chronos" component={ChronosScreen} />
            <Drawer.Screen name="List Items" component={ListScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
    );
}

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="hasMenu" component={HasMenu} />
                <Stack.Screen name="Timer" component={TimerScreen} />
                <Stack.Screen name="Congrats" component={CongratsScreen} />
                <Stack.Screen name="Single Item" component={SingleItemScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
