import React from "react";

import { Container, Text } from "./styles";
import Header from "../../components/Header";
import Settings from "../../components/Settings";

export default function Chronos() {
    return (
        <Container>
            <Header title="Chronos" hasDrawer />
            <Settings />
        </Container>
    );
}
