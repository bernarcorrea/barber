import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import colors from '../../styles/colors';

import { UserContext } from '../../contexts/UserContext';

import {
    Container,
    Scroller,
    Header,
    HeaderOptions,
    HeaderIcon,
    PageBody,
    UserIconArea,
    UserInfo,
    UserAvatar,
    UserName,
    UserLocation,
    ButtonProfile,
    ButtonProfileText
} from './style';

import HeaderIconBack from '../../assets/back.svg';
import HeaderIconLogout from '../../assets/logout.svg';
import ButtonIcon from '../../assets/pencil.svg';
import UserIcon from '../../assets/user.svg';

import Api from '../../Api';

export default ({ state }) => {
    const navigation = useNavigation();
    const { state: user } = useContext(UserContext);

    const handleLogoutClick = async () => {
        await Api.logout();
        navigation.reset({
            routes: [{ name: 'SingIn' }]
        });
    };

    const handleBackClick = () => {
        navigation.goBack();
    };

    const handleEditProfile = () => {
        navigation.navigate('User', {
            id: user.id,
            name: user.name,
            email: user.email,
            avatar: user.avatar
        });
    }

    return (
        <Container>
            <Scroller>
                <Header>
                    <HeaderOptions>
                        <HeaderIcon onPress={handleBackClick}>
                            <HeaderIconBack width="35" height="35" fill={colors.light} />
                        </HeaderIcon>
                        <HeaderIcon onPress={handleLogoutClick}>
                            <HeaderIconLogout width="25" height="25" stroke={colors.light} />
                        </HeaderIcon>
                    </HeaderOptions>
                </Header>
                <PageBody>
                    <UserInfo>
                        {user.avatar != '' ?
                            <UserAvatar source={{ uri: user.avatar }} />
                            :
                            <UserIconArea>
                                <UserIcon width="50" height="50" stroke={colors.primary} />
                            </UserIconArea>
                        }
                        <UserName>{user.name}</UserName>
                        <UserLocation>{user.email}</UserLocation>
                        <ButtonProfile onPress={handleEditProfile}>
                            <ButtonIcon width="15" height="15" stroke={colors.light} />
                            <ButtonProfileText>Editar perfil</ButtonProfileText>
                        </ButtonProfile>
                    </UserInfo>
                </PageBody>
            </Scroller>
        </Container>
    )
}