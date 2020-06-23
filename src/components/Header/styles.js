import styled from "styled-components/native";
import Constants from "expo-constants";

export const Container = styled.View`
    height: 80px;
    margin-top: ${Constants.statusBarHeight}px;

    align-items: center;
    justify-content: center;

    position: relative;
`;

export const Title = styled.Text`
    font-size: 22px;
    color: #333;
`;

export const Button = styled.TouchableOpacity.attrs({
    activeOpacity: 0.6,
})`
    width: 35px;
    height: 35px;
    margin-left: 15px;

    align-items: center;
    justify-content: center;

    position: absolute;
    left: 0;
`;
