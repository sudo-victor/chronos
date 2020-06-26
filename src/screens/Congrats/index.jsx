import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Container, Content, Title, Text } from "./styles";
import SubmitButton from "../../components/SubmitButton";

export default function Congrats() {
    const navigation = useNavigation();

    function handleBack() {
        navigation.navigate("Chronos");
    }

    return (
        <Container>
            <Content>
                <Title>Parabens!</Title>
                <Text>Você completou todo as séries.</Text>

                <SubmitButton text="Voltar" func={handleBack} />
            </Content>
        </Container>
    );
}
