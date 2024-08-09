import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { UserContext } from '../../contexts/UserContext';

import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SingMessageButton,
    SingMessageButtonText,
    SingMessageButtonTextBold
} from './style';

import SingInput from '../../components/SingInput';

import Api from '../../Api';

import BarberLogo from '../../assets/barber.svg';
import PersonIcon from '../../assets/person.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {
    const { dispatch: userDispatch } = useContext(UserContext); 
    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSingClick = async () => {
        if (nameField != '' && emailField != '' && passwordField != '') {
            let json = await Api.singUp(nameField, emailField, passwordField);
            if (json.token) {
                /** ARMAZENA TOKEN DE LOGIN */
                await AsyncStorage.setItem('token', json.token);
                /** ARMAZENA FOTO DE AVATAR */
                userDispatch({
                    type: 'setAvatar',
                    payload: {
                        avatar: json.data.avatar
                    }
                });
                /** REDIRECIONA PARA A HOME */
                navigation.reset({
                    routes:[{name: 'MainTab'}]
                });
            } else {
                alert('Erro: ' + json.error);
            }
        } else {
            alert('Preencha os campos!');
        }
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{ name: 'SingIn' }]
        });
    }

    return (
        <Container>
            <BarberLogo width="100%" height="140" />

            <InputArea>
                <SingInput
                    IconSvg={PersonIcon}
                    placeholder="Digite seu nome"
                    value={nameField}
                    onChangeText={t => setNameField(t)}
                />

                <SingInput
                    IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChangeText={t => setEmailField(t)}
                />

                <SingInput
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={t => setPasswordField(t)}
                    password={true}
                />

                <CustomButton onPress={handleSingClick}>
                    <CustomButtonText>CADASTRAR</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SingMessageButton onPress={handleMessageButtonClick}>
                <SingMessageButtonText>Já possui uma conta?</SingMessageButtonText>
                <SingMessageButtonTextBold>Faça login</SingMessageButtonTextBold>
            </SingMessageButton>
        </Container>
    );
}