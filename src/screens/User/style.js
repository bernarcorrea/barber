import React from 'react';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${colors.primary};
`;

export const Scroller = styled.ScrollView`
    flex: 1;
`;

export const HeaderArea = styled.View`
    padding: 10px;
`;

export const HeaderIcon = styled.TouchableOpacity`
    width: 35px;
    height: 35px;
`;

export const PageBody = styled.View`
    flex: 1;
    padding: 15px;
`;

export const PageTitle = styled.Text`
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 15px;
    color: ${colors.light}; 
`;

export const InputArea = styled.View`
    margin-top: 10px;
`;

export const InputLabel = styled.View``;

export const InputLabelText = styled.Text`
    font-size: 13px;
    text-transform: uppercase;
    margin: 0 0 5px 20px;
    color: ${colors.light}; 
`;

export const ButtonArea = styled.TouchableOpacity`
    margin-top: 15px;
    height: 60px;
    background-color: ${colors.tertiary};
    border-radius: 30px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ButtonAreaText = styled.Text`
    font-size: 18px;
    color: ${colors.light};
    margin-left: 10px;
`;