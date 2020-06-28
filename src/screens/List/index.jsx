import React from "react";
import { Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

import Header from "../../components/Header";

import {
    Container,
    ListContainer,
    Item,
    TextItem,
    DeleteButton,
} from "./styles";

export default function List() {
    const items = useSelector((state) => state.configList);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const createAlert = (title, description) =>
        Alert.alert(title, description, [{ text: "OK", onPress: () => {} }], {
            cancelable: false,
        });

    function handleDestroy(id) {
        dispatch({ type: "DESTROY_CONFIG", payload: { id } });
        createAlert("Excluiu", "A configuração foi removida da lista.");
    }

    function gotToSingle(item) {
        navigation.navigate("Single Item", { item });
    }

    return (
        <Container>
            <Header title="Lista" isDrawer />

            <ListContainer>
                {items.map((item) => (
                    <Item
                        key={String(item.id)}
                        onPress={() => gotToSingle(item)}
                    >
                        <TextItem>{item.name}</TextItem>

                        <DeleteButton onPress={() => handleDestroy(item.id)}>
                            <FontAwesome
                                name="trash-o"
                                size={25}
                                color="#DB5461"
                            />
                        </DeleteButton>
                    </Item>
                ))}
            </ListContainer>
        </Container>
    );
}
