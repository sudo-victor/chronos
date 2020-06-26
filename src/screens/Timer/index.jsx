import React, { useState, useMemo, useEffect, useCallback } from "react";
import { Easing } from "react-native";
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
    const [percentage, setPercentage] = useState(0);
    const [sectionType, setSectionType] = useState("espera");
    const [playing, setPlaying] = useState(false);
    const [currentValue, setCurrentValue] = useState(0);
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
        if (sectionType === "espera" && !playing) {
            setCurrentValue(5);
            setPercentage(5);
            setPlaying(true);
        } else if (
            sectionType === "tempo de trabalho" &&
            !playing &&
            sets > 0
        ) {
            setCurrentValue(workTime);
            setPercentage(workTime);
            setPlaying(true);
        } else if (
            sectionType === "tempo de descanso" &&
            !playing &&
            sets > 0
        ) {
            setCurrentValue(restTime);
            setPercentage(restTime);
            setSets(sets - 1);
            setPlaying(true);
        }

        if (playing && currentValue > 0 && percentage > 0) {
            const time = setInterval(() => {
                setProgress(progress + 100 / percentage);
                setCurrentValue(currentValue - 1);
            }, 1000);

            return () => {
                clearInterval(time);
            };
        }

        if (playing === false) {
            if (sectionType === "espera") {
                setSectionType("tempo de trabalho");
            } else if (sectionType === "tempo de trabalho") {
                setSectionType("tempo de descanso");
            } else if (sectionType === "tempo de descanso") {
                setSectionType("tempo de trabalho");
            }
        }
    }, [playing, currentValue, workTime, sectionType, sets]);

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
                <State>{sectionType}</State>

                <Progress
                    size={240}
                    width={9}
                    fill={progress}
                    duration={100}
                    rotation={0}
                    tintColor="#333"
                    backgroundColor="#F9FBF2"
                >
                    {() => (
                        <ContainerValue>
                            <Value>{currentValue}</Value>
                        </ContainerValue>
                    )}
                </Progress>

                <Sets>Séries: {sets}</Sets>

                <ControlButton>
                    <ContainerButton>
                        <Button
                            onPress={handlePause}
                            style={{
                                backgroundColor: playing
                                    ? "#fafafa"
                                    : "#DB5461",
                            }}
                        >
                            <Ionicons
                                name="ios-pause"
                                size={20}
                                color={playing ? "#555" : "#fafafa"}
                            />
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
