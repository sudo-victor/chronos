import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
    width: 200px;
    height: 60px;
    margin-top: 50px;

    align-items: center;
    justify-content: center;

    background-color: #8b80f9;
    border-radius: 10px;
`;

export const Text = styled.Text`
    font-size: 18px;
    color: #fafafa;
`;
