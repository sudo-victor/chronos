import React from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Container, Content, Header, Title } from "./styles";
import { Drawer } from "react-native-paper";

export default function DrawerContent(props) {
    return (
        <Container>
            <DrawerContentScrollView {...props}>
                <Content>
                    <Header>
                        <Title>chronos</Title>
                    </Header>

                    <Drawer.Section>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {
                                props.navigation.navigate("Chronos");
                            }}
                        />
                    </Drawer.Section>

                    <Drawer.Section>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons
                                    name="format-list-bulleted-square"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Lista"
                            onPress={() => {
                                props.navigation.navigate("List Items");
                            }}
                        />
                    </Drawer.Section>

                    <Drawer.Section>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons
                                    name="settings-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Configurações"
                            onPress={() => {
                                props.navigation.navigate("Settings");
                            }}
                        />
                    </Drawer.Section>
                </Content>
            </DrawerContentScrollView>
        </Container>
    );
}
