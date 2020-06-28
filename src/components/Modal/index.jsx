import React, { useState } from "react";
import { Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import {
    ModalContainer,
    Container,
    Content,
    Header,
    BackButton,
    Title,
    Input,
    SaveButton,
    SaveText,
} from "./styles";

export default function Modal({ modalVisible, closeModal, item }) {
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();

    const createAlert = (title, description) =>
        Alert.alert(title, description, [{ text: "OK", onPress: () => {} }], {
            cancelable: false,
        });

    function handleAddConfig() {
        if (inputValue === "") {
            return;
        }

        let objConfig = {
            name: inputValue,
            sets: item.sets,
            workingTime: item.workingTime,
            restingTime: item.restingTime,
        };

        dispatch({ type: "ADD_CONFIG", payload: objConfig });
        createAlert("Salvou", "A configuração foi adicionada na lista.");
        setInputValue("");
        closeModal();
    }

    function handleBack() {
        setInputValue("");
        closeModal();
    }

    return (
        <ModalContainer
            animationType="fade"
            transparent={true}
            visible={modalVisible}
        >
            <Container>
                <Content>
                    <Header>
                        <BackButton onPress={handleBack}>
                            <AntDesign
                                name="arrowleft"
                                size={25}
                                color="#333"
                            />
                        </BackButton>
                        <Title>Salvar nova configuração</Title>
                    </Header>

                    <Input
                        value={inputValue}
                        onChangeText={(text) => setInputValue(text)}
                        placeholder="Nome da configuração"
                    />

                    <SaveButton onPress={handleAddConfig}>
                        <SaveText>Salvar</SaveText>
                    </SaveButton>
                </Content>
            </Container>
        </ModalContainer>
    );
}
