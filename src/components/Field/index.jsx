import React from "react";
import { Feather } from "@expo/vector-icons";

import {
    Container,
    Title,
    Controls,
    ControlButton,
    ControlValue,
} from "./styles";

export default function Fields({ title, value, setValue, formattedValue }) {
    function increment() {
        setValue(validationValue(value + 1));
    }

    function decrement() {
        setValue(validationValue(value - 1));
    }

    function validationValue(value) {
        if (value < 1) {
            return 1;
        }
        return value;
    }

    return (
        <Container>
            <Title>{title}:</Title>

            <Controls>
                <ControlButton onPress={decrement}>
                    <Feather name="minus" size={10} color="#333" />
                </ControlButton>

                <ControlValue>
                    {formattedValue ? formattedValue : value}
                </ControlValue>

                <ControlButton onPress={increment}>
                    <Feather name="plus" size={10} color="#333" />
                </ControlButton>
            </Controls>
        </Container>
    );
}
