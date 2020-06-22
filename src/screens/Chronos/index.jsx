import React from "react";

import { Container, Text } from "./styles";
import Header from "../../components/Header";

export default function Chronos() {
    return (
        <Container>
            <Header title="Chronos" hasDrawer />
            <Text>hello world</Text>
        </Container>
    );
}
