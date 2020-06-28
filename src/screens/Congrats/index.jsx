import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Container, Content, Title, Text } from "./styles";
import SubmitButton from "../../components/SubmitButton";

export default function Congrats() {
    const navigation = useNavigation();
    const route = useRoute();
    const previusPage = route.params.previusPage;

    function handleBack() {
        navigation.navigate(previusPage);
    }

    return (
        <Container>
            <Content>
                <Title>Parabens!</Title>
                <Text>Você completou todas as séries.</Text>

                <SubmitButton text="Voltar" func={handleBack} />
            </Content>
        </Container>
    );
}
