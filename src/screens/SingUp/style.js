import react from 'react';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
    background-color: ${colors.primary};
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const InputArea = styled.View`
    width: 100%;
    padding: 40px;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: ${colors.tertiary};
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;

export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: ${colors.light};
`;

export const SingMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;
`;

export const SingMessageButtonText = styled.Text`
    font-size: 14px;
    color: ${colors.tertiary};
`;

export const SingMessageButtonTextBold = styled.Text`
    font-size: 14px;
    color: ${colors.tertiary};
    font-weight: bold;
    margin-left: 3px;
`;