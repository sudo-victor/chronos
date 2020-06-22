import React from "react";

import { Container, Text } from "./styles";

export default function SubmitButton({ text, func }) {
    return (
        <Container onPress={func}>
            <Text>{text}</Text>
        </Container>
    );
}
