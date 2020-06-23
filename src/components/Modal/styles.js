import styled from "styled-components/native";

export const ModalContainer = styled.Modal``;

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.6);
`;

export const Content = styled.View`
    padding: 15px;

    align-items: center;

    background-color: #fafafa;
    border-radius: 20px;
`;

export const Header = styled.View`
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const BackButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
})``;

export const Title = styled.Text`
    margin-left: 15px;

    font-size: 18px;
`;

export const Input = styled.TextInput`
    width: 250px;
    height: 45px;
    margin: 50px 20px 0px;
    padding: 5px;

    font-size: 16px;
    color: #333;
    border-bottom-width: 1px;
    border-bottom-color: #333;
`;

export const SaveButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
})`
    width: 200px;
    height: 60px;
    margin-top: 50px;

    align-items: center;
    justify-content: center;

    background-color: #8b80f9;
    border-radius: 10px;
`;

export const SaveText = styled.Text`
    font-size: 18px;
    color: #fafafa;
`;
