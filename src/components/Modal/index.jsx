import React, { useState } from "react";
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

    function handleAddConfig() {
        if (inputValue === "") {
            return;
        }

        let objConfig = {
            name: inputValue,
            sets: item.sets,
            workTime: item.workTime,
            restTime: item.restTime,
        };

        dispatch({ type: "ADD_CONFIG", payload: objConfig });
        alert("salvou");
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
