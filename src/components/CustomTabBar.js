import React, { useContext } from 'react';
import styled from 'styled-components/native';
import colors from '../styles/colors';
import { UserContext } from '../contexts/UserContext';

import HomeIcon from '../assets/home.svg';
import SearchIcon from '../assets/search.svg';
import TodayIcon from '../assets/today.svg';
import FavoriteIcon from '../assets/favorite.svg';
import AccountIcon from '../assets/account.svg';

const TabArea = styled.View`
    height: 60px;
    background-color: ${colors.secondary};
    flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: ${colors.light};
    border-radius: 35px;
    border: 3px solid ${colors.secondary};
    margin-top: -20px;
`;

const AvatarIcon = styled.Image`
    width: 24px;
    height: 24px;
    border-radius: 12px;
`;

export default ({ state, navigation }) => {
    const { state: user } = useContext(UserContext);
    
    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <TabArea>
            <TabItem onPress={() => goTo('Home')}>
                <HomeIcon style={{ opacity: state.index === 0 ? 1 : 0.7 }} width="24" height="24" fill={colors.light}></HomeIcon>
            </TabItem>
            <TabItem onPress={() => goTo('Search')}>
                <SearchIcon style={{ opacity: state.index === 1 ? 1 : 0.7 }} width="24" height="24" fill={colors.light}></SearchIcon>
            </TabItem>
            <TabItemCenter onPress={() => goTo('Appointments')}>
                <TodayIcon width="32" height="32" fill={colors.secondary}></TodayIcon>
            </TabItemCenter>
            <TabItem onPress={() => goTo('Favorites')}>
                <FavoriteIcon style={{ opacity: state.index === 3 ? 1 : 0.7 }} width="24" height="24" fill={colors.light}></FavoriteIcon>
            </TabItem>
            <TabItem onPress={() => goTo('Profile')}>
                {user.avatar != '' ?
                    <AvatarIcon source={{ uri: user.avatar }} />
                    :
                    <AccountIcon style={{ opacity: state.index === 4 ? 1 : 0.7 }} width="24" height="24" fill={colors.light}></AccountIcon>
                }
            </TabItem>
        </TabArea>
    );
}