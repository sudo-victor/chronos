import React, { useState, useMemo, useEffect, useCallback } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons, Feather } from "@expo/vector-icons";

import formatsSeconds from "../../utils/formatsSeconds";

import {
    Container,
    Content,
    State,
    Progress,
    ContainerValue,
    Value,
    Sets,
    ControlButton,
    ContainerButton,
    Button,
    TextButton,
} from "./styles";
import Header from "../../components/Header";

export default function Timer() {
    const [sets, setSets] = useState(0);
    const [workTime, setWorkTime] = useState(0);
    const [restTime, setRestTime] = useState(0);
    const [progress, setProgress] = useState(0);
    const [sectionType, setSectionType] = useState("");
    const [playing, setPlaying] = useState(true);
    const [currentValue, setCurrentValue] = useState(15);
    const navigation = useNavigation();
    const route = useRoute();
    const item = route.params.item;

    useEffect(() => {
        function loadValues() {
            setSets(item.sets);
            setWorkTime(item.workTime);
            setRestTime(item.restTime);
        }

        loadValues();
    }, []);

    useEffect(() => {
        if (playing && currentValue > 0) {
            const time = setInterval(() => {
                setProgress(progress - 100 / 15);
                setCurrentValue(currentValue - 1);
            }, 1000);

            return () => {
                clearInterval(time);
            };
        }
    }, [playing, currentValue]);

    const formattedWorkTime = useMemo(() => {
        return formatsSeconds(workTime);
    }, [workTime]);

    const formattedRestTime = useMemo(() => {
        return formatsSeconds(restTime);
    }, [restTime]);

    const handlePause = useCallback(() => setPlaying(!playing), [playing]);

    function handleCancel() {
        navigation.navigate("Chronos");
    }

    return (
        <Container>
            <Header title="Timer" />

            <Content>
                <State>espera</State>

                <Progress
                    size={240}
                    width={9}
                    fill={progress}
                    duration={300}
                    rotation={0}
                    tintColor="#333"
                    backgroundColor="#F9FBF2"
                >
                    {() => (
                        <ContainerValue>
                            <Value>{workTime}</Value>
                        </ContainerValue>
                    )}
                </Progress>

                <Sets>Séries: {sets}</Sets>

                <ControlButton>
                    <ContainerButton>
                        <Button onPress={handlePause}>
                            <Ionicons name="ios-pause" size={20} color="#555" />
                        </Button>
                        <TextButton>pause</TextButton>
                    </ContainerButton>

                    <ContainerButton>
                        <Button onPress={handleCancel}>
                            <Feather name="x" size={20} color="#555" />
                        </Button>
                        <TextButton>cancelar</TextButton>
                    </ContainerButton>
                </ControlButton>
            </Content>
        </Container>
    );
}
