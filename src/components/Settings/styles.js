import styled from "styled-components/native";

export const Container = styled.View`
    justify-content: space-between;
    align-items: center;
`;

export const Header = styled.View`
    width: 100%;
    margin: 10px 0px;
    padding-right: 30px;

    align-items: flex-end;
`;

export const ButtonContainer = styled.View`
    width: 60px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Button = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
})``;

export const Field = styled.View`
    width: 100%;

    justify-content: space-between;
    align-items: center;
`;

export const FieldTitle = styled.Text`
    font-size: 18px;
    color: #333;
`;

export const Controls = styled.View`
    width: 150px;
    margin: 20px 0px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ControlButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
})`
    width: 25px;
    height: 25px;

    align-items: center;
    justify-content: center;

    background-color: #fff;
    elevation: 3;
`;

export const ControlValue = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #333;
`;
