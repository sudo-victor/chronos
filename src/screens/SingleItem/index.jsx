import React from "react";
import { useRoute } from "@react-navigation/native";

import { Container } from "./styles";
import Header from "../../components/Header";
import Settings from "../../components/Settings";

export default function SingleItem() {
    const route = useRoute();
    const item = route.params.item;

    return (
        <Container>
            <Header title={item.name} isStack screenName="ListItems" />
            <Settings
                preSets={item.sets}
                preWorkTime={item.workTime}
                preRestTime={item.restTime}
            />
        </Container>
    );
}
