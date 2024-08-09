import React from 'react';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${colors.light};
`;

export const Scroller = styled.ScrollView`
    flex: 1;
`;

export const Header = styled.View`
    background-color: ${colors.tertiary};
    height: 150px;
`;

export const HeaderOptions = styled.View`
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   padding: 10px;
`;

export const HeaderIcon = styled.TouchableOpacity`
    width: 35px;
    height: 35px;
`;

export const PageBody = styled.View`
   background-color: ${colors.light};
`;

export const UserInfo = styled.View`
    align-items: center;
    margin-top: -40px;
`;

export const UserIconArea = styled.View`
    width: 80px;
    height: 80px;
    background-color: ${colors.light};
    border-radius: 40px;
    justify-content: center;
    align-items: center;
`;

export const UserAvatar = styled.Image`
    width: 80px;
    height: 80px;
    border-color: ${colors.light};
    border-width: 4px;
    background-color: ${colors.light};
    border-radius: 40px;
`;

export const UserName = styled.Text`
    margin-top: 5px;
    font-size: 20px;
    font-weight: bold;
    color: ${colors.dark};
`;

export const UserLocation = styled.Text`
    font-size: 14px;
    color: #999999;
`;

export const ButtonProfile = styled.TouchableOpacity`
    margin-top: 10px;
    flex-direction: row;
    justify-content: center;
    width: 120px;
    padding: 10px 0;
    border-radius: 75px;
    background-color: ${colors.primary};
`;

export const ButtonProfileText = styled.Text`
    font-size: 12px;
    margin-left: 5px;
    color: ${colors.light}
`;



