import React, { useState, useMemo } from "react";
import { FontAwesome } from "@expo/vector-icons";

import { Container, Header, SaveButton } from "./styles";
import Field from "../Field";

export default function Settings() {
    const [sets, setSets] = useState(3);
    const [workTime, setWorkTime] = useState(30);
    const [restTime, setRestTime] = useState(10);

    const formattedWorkTime = useMemo(() => {
        return secondsToMinutes(workTime);
    }, [workTime]);

    const formattedRestTime = useMemo(() => {
        return secondsToMinutes(restTime);
    }, [restTime]);

    function openModal() {
        setModalVisible(true);
    }

    function closeModal() {
        setModalVisible(false);
    }

    // Converte os segundos no formato min:seg
    function secondsToMinutes(value) {
        const minutes = Math.floor(value / 60);
        const seconds = value % 60;
        const maskedMinutes = String(minutes).padStart(2, "0");
        const maskedSeconds = String(seconds).padStart(2, "0");

        return `${maskedMinutes}:${maskedSeconds}`;
    }

    return (
        <Container>
            <Header>
                <SaveButton onPress={() => {}}>
                    <FontAwesome name="save" size={25} color="#FFBF00" />
                </SaveButton>
            </Header>

            <Field title="séries" value={sets} setValue={setSets} />
            <Field
                title="tempo de trabalho"
                formattedValue={formattedWorkTime}
                value={workTime}
                setValue={setWorkTime}
            />
            <Field
                title="tempo de trabalho"
                formattedValue={formattedRestTime}
                value={restTime}
                setValue={setRestTime}
            />

            {/* <SubmitButton text="Iniciar" func={() => {}} /> */}
        </Container>
    );
}
