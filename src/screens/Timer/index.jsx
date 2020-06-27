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
    const previusPage = route.params.previusPage;

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
        if (playing && currentValue > -1 && percentage > 0) {
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
        if (currentValue === -1 && progress === 100) {
            if (sectionType === "espera") {
                alterSection(workingTime, "tempo de trabalho");

                return;
            } else if (sectionType === "tempo de trabalho") {
                alterSection(restingTime, "tempo de descanso");
                setSets(sets - 1);

                if (sets - 1 === 0) {
                    setPlaying(false);
                    navigation.navigate("Congrats", { previusPage });
                }
                return;
            } else if (sectionType === "tempo de descanso") {
                alterSection(workingTime, "tempo de trabalho");

                return;
            }
        }

        function alterSection(value, section) {
            setCurrentValue(value);
            setPercentage(value);
            setProgress(0);
            setSectionType(section);

            return;
        }

        return;
    }, [currentValue, progress]);

    // formats the current value from seconds to minutes:seconds
    const formattedCurrentValue = useMemo(() => {
        if (currentValue < 0) {
            return formatsSeconds(0);
        }
        return formatsSeconds(currentValue);
    }, [currentValue]);

    const handlePause = useCallback(() => setPlaying(!playing), [playing]);

    function handleCancel() {
        navigation.navigate(previusPage);
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
                            <Value>{formattedCurrentValue}</Value>
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
