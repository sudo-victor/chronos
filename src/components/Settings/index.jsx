import React, { useState, useMemo, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";

import formatsSeconds from "../../utils/formatsSeconds";

import { Container, Header, Button, ButtonContainer } from "./styles";
import Field from "../Field";
import Modal from "../Modal";
import SubmitButton from "../SubmitButton";

export default function Settings({
    preSets,
    preWorkTime,
    preRestTime,
    isSingleItem,
    idItem,
}) {
    const [sets, setSets] = useState(3);
    const [workTime, setWorkTime] = useState(15);
    const [restTime, setRestTime] = useState(10);
    const [modalVisible, setModalVisible] = useState(10);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    useEffect(() => {
        function loadPreConfig() {
            if (preSets && preWorkTime && preRestTime) {
                setSets(preSets);
                setWorkTime(preWorkTime);
                setRestTime(preRestTime);
            }
        }

        loadPreConfig();
    }, []);

    const formattedWorkTime = useMemo(() => {
        return formatsSeconds(workTime);
    }, [workTime]);

    const formattedRestTime = useMemo(() => {
        return formatsSeconds(restTime);
    }, [restTime]);

    function openModal() {
        setModalVisible(true);
    }

    function closeModal() {
        setModalVisible(false);
    }

    function handleEdit() {
        dispatch({
            type: "UPDATE_CONFIG",
            payload: { id: idItem, sets, workTime, restTime },
        });
    }

    function handleDestroy() {
        dispatch({ type: "DESTROY_CONFIG", payload: { id: idItem } });
        navigation.navigate("List Items");
    }

    return (
        <Container>
            <Header>
                {isSingleItem ? (
                    <ButtonContainer>
                        <Button onPress={handleEdit}>
                            <FontAwesome
                                name="save"
                                size={25}
                                color="#FFBF00"
                            />
                        </Button>
                        <Button onPress={handleDestroy}>
                            <FontAwesome
                                name="trash-o"
                                size={25}
                                color="#DB5461"
                            />
                        </Button>
                    </ButtonContainer>
                ) : (
                    <Button onPress={openModal}>
                        <FontAwesome name="save" size={25} color="#FFBF00" />
                    </Button>
                )}
            </Header>

            <Field title="séries" value={sets} setValue={setSets} />
            <Field
                title="tempo de trabalho"
                formattedValue={formattedWorkTime}
                value={workTime}
                setValue={setWorkTime}
            />
            <Field
                title="tempo de espera"
                formattedValue={formattedRestTime}
                value={restTime}
                setValue={setRestTime}
            />

            <Modal
                modalVisible={modalVisible}
                closeModal={closeModal}
                item={{ sets, workTime, restTime }}
            />

            <SubmitButton
                text="Iniciar"
                func={() => {
                    alert("oi");
                }}
            />
        </Container>
    );
}
