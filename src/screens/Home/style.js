import React from 'react';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${colors.primary};
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderTitle = styled.Text`
    width: 250px;
    font-size: 24px;
    font-weight: bold;
    color: ${colors.light};
`;

export const SearchButton = styled.TouchableOpacity`
    width: 26px;
    height: 26px;
`;

export const LocationArea = styled.View`
    background-color: ${colors.secondary};
    height: 60px;
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
    padding: 0 20px;
    margin-top: 30px;
`;

export const LocationInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: ${colors.light};
`;

export const LocationFinder = styled.TouchableOpacity`
    width: 26px;
    height: 26px;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;

export const ListArea = styled.View`
    margin: 30px 0;
`;