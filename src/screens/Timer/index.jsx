import React, { useState, useMemo, useEffect, useCallback } from "react";
import { Audio } from "expo-av";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { Ionicons, Feather } from "@expo/vector-icons";

import formatsSeconds from "../../utils/formatsSeconds";
import beep from "../../../assets/audio/beep.mp3";

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
    const [progress, setProgress] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const [sectionType, setSectionType] = useState("await");
    const [playing, setPlaying] = useState(true);
    const [currentValue, setCurrentValue] = useState(null);
    const navigation = useNavigation();
    const route = useRoute();
    const item = route.params.item;
    const previusPage = route.params.previusPage;
    const soundObject = new Audio.Sound();

    // start values
    useEffect(() => {
        function loadValues() {
            setSets(item.sets);
            setWorkingTime(item.workingTime);
            setRestingTime(item.restingTime);
            setCurrentValue(5);
            setPercentage(5);
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
            if (sectionType === "await") {
                alterSection(workingTime, "working time");

                return;
            } else if (sectionType === "working time") {
                alterSection(restingTime, "resting time");
                setSets(sets - 1);

                if (sets - 1 === 0) {
                    setPlaying(false);
                    navigation.navigate("Congrats", { previusPage });
                }
                return;
            } else if (sectionType === "resting time") {
                alterSection(workingTime, "working time");

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

        if (currentValue === 0) {
            handleBeep();
        }

        return formatsSeconds(currentValue);
    }, [currentValue]);

    const handlePause = useCallback(() => setPlaying(!playing), [playing]);

    function handleCancel() {
        navigation.navigate(previusPage);
    }

    async function handleBeep() {
        try {
            await soundObject.loadAsync(beep);
            await soundObject.playAsync();
            // Your sound is playing!
        } catch (error) {
            // An error occurred!
            console.log("nao foi")
        }
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

                <Sets>sets: {sets}</Sets>

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
                        <TextButton>stop</TextButton>
                    </ContainerButton>

                    <ContainerButton>
                        <Button onPress={handleCancel}>
                            <Feather name="x" size={20} color="#555" />
                        </Button>
                        <TextButton>cancel</TextButton>
                    </ContainerButton>
                </ControlButton>
            </Content>
        </Container>
    );
}
