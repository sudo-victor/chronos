import React from "react";
import { useSelector, useDispatch } from "react-redux";
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

    function handleDestroy(id) {
        dispatch({ type: "DESTROY_CONFIG", payload: { id } });
    }

    return (
        <Container>
            <Header title="Lista" hasDrawer />

            <ListContainer>
                {items.map((item) => (
                    <Item key={String(item.id)}>
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
