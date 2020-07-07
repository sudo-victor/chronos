import styled from "styled-components/native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export const Container = styled.View`
    flex: 1;

    background-color: ${(props) => {
        if (props.section === "await") {
            return "#FFBF00";
        } else if (props.section === "working time") {
            return "#8b80f9";
        } else if (props.section === "resting time") {
            return "#7ac9b5";
        }
    }};
`;

export const Content = styled.View`
    flex: 1;
    align-items: center;
`;

export const Progress = styled(AnimatedCircularProgress)`
    margin: 15px;
`;

export const State = styled.Text`
    font-size: 22px;
    text-transform: uppercase;
    color: #fff;
`;

export const ContainerValue = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Value = styled.Text`
    font-size: 64px;
    color: #fafafa;
`;

export const Sets = styled.Text`
    font-size: 22px;
    color: #000;
`;

export const ControlButton = styled.View`
    width: 100%;
    padding: 40px 90px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ContainerButton = styled.View`
    align-items: center;
    justify-content: space-between;
`;

export const Button = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8,
})`
    width: 50px;
    height: 50px;

    align-items: center;
    justify-content: center;

    background-color: #fff;
    border-radius: 50px;
    elevation: 3;
`;

export const TextButton = styled.Text``;
