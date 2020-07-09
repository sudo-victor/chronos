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
        Alert.alert(title, description, [{ text: "OK", onPress: () => { } }], {
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
        createAlert("Save!", "The configuration has been added to the list.");
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
                        <Title>Save new configuration</Title>
                    </Header>

                    <Input
                        value={inputValue}
                        onChangeText={(text) => setInputValue(text)}
                        placeholder="Configuration name"
                    />

                    <SaveButton onPress={handleAddConfig}>
                        <SaveText>Save</SaveText>
                    </SaveButton>
                </Content>
            </Container>
        </ModalContainer>
    );
}
