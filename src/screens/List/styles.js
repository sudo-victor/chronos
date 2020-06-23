import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;

    background-color: #fafafa;
`;

export const ListContainer = styled.ScrollView.attrs({})`
    flex: 1;

    background-color: #fafafa;
`;
export const Item = styled.TouchableOpacity.attrs({ activeOpacity: 0.6 })`
    margin: 5px 10px;
    padding: 20px;

    flex-direction: row;
    justify-content: space-between;

    background-color: #fafafa;

    border-bottom-color: #dbdbdb;
    border-bottom-width: 1px;
`;

export const DeleteButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
})``;

export const TextItem = styled.Text`
    color: #333;
    font-size: 16px;
`;
