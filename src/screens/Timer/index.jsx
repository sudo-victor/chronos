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
    const [workingTime, setWorkingTime] = useState(0);
    const [restingTime, setRestingTime] = useState(0);
    const [awaitingTime, setAwaitingTime] = useState(5);
    const [progress, setProgress] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const [sectionType, setSectionType] = useState("espera");
    const [playing, setPlaying] = useState(true);
    const [currentValue, setCurrentValue] = useState(null);
    const navigation = useNavigation();
    const route = useRoute();
    const item = route.params.item;

    // start values
    useEffect(() => {
        function loadValues() {
            setSets(item.sets);
            setWorkingTime(item.workingTime);
            setRestingTime(item.restingTime);
            setCurrentValue(awaitingTime);
            setPercentage(awaitingTime);
        }

        loadValues();
    }, []);

    // chronometer
    useEffect(() => {
        if (playing && currentValue > 0 && percentage > 0) {
            const time = setInterval(() => {
                setProgress(validateProgress(progress + 100 / percentage));
                setCurrentValue(currentValue - 1);
            }, 950);

            return () => {
                clearInterval(time);
            };
        }

        // don't let progress exceed 100
        function validateProgress(value) {
            if (value >= 100) {
                return 100;
            }

            return value;
        }
    }, [playing, currentValue, percentage]);

    // section change
    useEffect(() => {
        if (currentValue === 0 && progress === 100) {
            if (sectionType === "espera") {
                console.log("acabou a espera");
                setCurrentValue(workingTime);
                setPercentage(workingTime);
                setProgress(0);
                setSectionType("tempo de trabalho");
            } else if (sectionType === "tempo de trabalho") {
                console.log("acabou tempo de trabalho");
                setCurrentValue(restingTime);
                setPercentage(restingTime);
                setProgress(0);
                setSectionType("tempo de descanso");
            } else if (sectionType === "tempo de descanso") {
                console.log("acabou tempo de descanso");
                setCurrentValue(workingTime);
                setPercentage(workingTime);
                setProgress(0);
                setSectionType("tempo de trabalho");
            }
        }

        return;
    }, [currentValue, progress]);

    // formats the working time from seconds to minutes:seconds
    const formattedWorkingTime = useMemo(() => {
        return formatsSeconds(workingTime);
    }, [workingTime]);

    // formats the resting time from seconds to minutes:seconds
    const formattedRestingTime = useMemo(() => {
        return formatsSeconds(restingTime);
    }, [restingTime]);

    const handlePause = useCallback(() => setPlaying(!playing), [playing]);

    function handleCancel() {
        navigation.goBack();
    }

    return (
        <Container section={sectionType}>
            <Header title="Timer" />

            <Content>
                <State>{sectionType}</State>

                <Progress
                    size={240}
                    width={9}
                    fill={progress}
                    duration={0}
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
