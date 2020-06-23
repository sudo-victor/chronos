import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

import { Container, Title, Button } from "./styles";

export default function Header({ title, isDrawer, isStack, screenName }) {
    const navigation = useNavigation();

    function openDrawer() {
        navigation.openDrawer();
    }

    function goTo() {
        navigation.navigate(screenName);
    }

    return (
        <Container>
            {isDrawer && (
                <Button onPress={openDrawer}>
                    <Ionicons name="ios-menu" color="#333" size={30} />
                </Button>
            )}

            {isStack && (
                <Button onPress={goTo}>
                    <AntDesign name="arrowleft" color="#333" size={30} />
                </Button>
            )}

            <Title>{title}</Title>
        </Container>
    );
}
