import React, { useEffect, useContext } from 'react';
import { Container, LoadingIcon } from './style';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import colors from '../../styles/colors';

import { UserContext } from '../../contexts/UserContext';
import Api from '../../Api';

import BarberLogo from '../../assets/barber.svg';

export default () => {
    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem("token");
            if (token) {
                /** VERIFICA EXISTÊNCIA DE TOKEN DE LOGIN */
                let json = await Api.checkToken(token);
                if (json.token) {
                    /** ARMAZENA TOKEN DE LOGIN */
                    await AsyncStorage.setItem('token', json.token);
                    /** ARMAZENA FOTO DE AVATAR */
                    userDispatch({
                        type: 'setProfile',
                        payload: {
                            id: json.data.id,
                            avatar: json.data.avatar,
                            name: json.data.name,
                            email: json.data.email
                        }
                    });
                    /** REDIRECIONA PARA A HOME */
                    navigation.reset({
                        routes: [{ name: 'MainTab' }]
                    });
                } else {
                    /** REDIRECIONA PARA O LOGIN */
                    navigation.navigate('SingIn');
                }
            } else {
                /** REDIRECIONA PARA O LOGIN */
                navigation.navigate('SingIn');
            }
        }
        checkToken();
    }, []);

    return (
        <Container>
            <BarberLogo width="100%" height="140" />
            <LoadingIcon size="large" color={colors.light} />
        </Container>
    );
}