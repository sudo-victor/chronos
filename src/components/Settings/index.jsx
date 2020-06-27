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
    preWorkingTime,
    preRestingTime,
    isSingleItem,
    idItem,
    previusPage,
}) {
    const [sets, setSets] = useState(3);
    const [workingTime, setWorkingTime] = useState(15);
    const [restingTime, setRestingTime] = useState(10);
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    useEffect(() => {
        function loadPreConfig() {
            if (preSets && preWorkingTime && preRestingTime) {
                setSets(preSets);
                setWorkingTime(preWorkingTime);
                setRestingTime(preRestingTime);
            }
        }

        loadPreConfig();
    }, []);

    const formattedWorkingTime = useMemo(() => {
        return formatsSeconds(workingTime);
    }, [workingTime]);

    const formattedRestingTime = useMemo(() => {
        return formatsSeconds(restingTime);
    }, [restingTime]);

    function openModal() {
        setModalVisible(true);
    }

    function closeModal() {
        setModalVisible(false);
    }

    function gotToTimer() {
        const item = {
            sets,
            workingTime,
            restingTime,
        };
        navigation.navigate("Timer", { item, previusPage });
    }

    function handleEdit() {
        dispatch({
            type: "UPDATE_CONFIG",
            payload: { id: idItem, sets, workingTime, restingTime },
        });
        alert("salvo");
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
                formattedValue={formattedWorkingTime}
                value={workingTime}
                setValue={setWorkingTime}
            />
            <Field
                title="tempo de descanso"
                formattedValue={formattedRestingTime}
                value={restingTime}
                setValue={setRestingTime}
            />

            <Modal
                modalVisible={modalVisible}
                closeModal={closeModal}
                item={{ sets, workingTime, restingTime }}
            />

            <SubmitButton text="Iniciar" func={gotToTimer} />
        </Container>
    );
}
