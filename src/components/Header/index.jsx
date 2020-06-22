import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons as Icon } from "@expo/vector-icons";

import { Container, Title, DrawerButton } from "./styles";

export default function Header({ title, hasDrawer }) {
    const navigation = useNavigation();

    function openDrawer() {
        navigation.openDrawer();
    }

    return (
        <Container>
            {hasDrawer && (
                <DrawerButton onPress={openDrawer}>
                    <Icon name="ios-menu" color="#333" size={30} />
                </DrawerButton>
            )}

            <Title>{title}</Title>
        </Container>
    );
}
