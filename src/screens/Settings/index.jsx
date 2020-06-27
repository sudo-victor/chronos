import React from "react";

import { Container, Content, Input } from "./styles";
import Header from "../../components/Header";

export default function Settings() {
    return (
        <Container>
            <Header title="Configurações" isDrawer />

            <Content>
                <Input />
            </Content>
        </Container>
    );
}
