import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import trophy from "../../../assets/trophy.jpg";

import { Container, Content, Title, Text, Trophy } from "./styles";
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
                <Title>Awesome!</Title>
                <Text>You have completed all sets.</Text>

                <Trophy source={trophy} />

                <SubmitButton text="Voltar" func={handleBack} />
            </Content>
        </Container>
    );
}
