import React, { useState } from 'react';
import {
    Container,
    Scroller,
    HeaderArea,
    HeaderIcon,
    PageBody,
    PageTitle,
    InputArea,
    InputLabel,
    InputLabelText,
    ButtonArea,
    ButtonAreaText
} from './style';
import { useNavigation, useRoute } from '@react-navigation/native';
import colors from '../../styles/colors';

import HeaderIconBack from '../../assets/back.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import AccountIcon from '../../assets/account.svg';
import CheckIcon from '../../assets/check.svg';

import SingInput from '../../components/SingInput';

export default () => {
    const navigation = useNavigation();
    const route = useRoute();

    const [userInfo, setUserInfo] = useState({
        id: route.params.id,
        name: route.params.name,
        email: route.params.email,
        avatar: route.params.avatar,
    })

    const handleBackClick = () => {
        navigation.goBack();
    };

    const handleUpdateUserClick = () => {
        navigation.navigate('Profile');
    }

    return (
        <Container>
            <Scroller>
                <HeaderArea>
                    <HeaderIcon onPress={handleBackClick}>
                        <HeaderIconBack width="35" height="35" fill={colors.light} />
                    </HeaderIcon>
                </HeaderArea>
                <PageBody>
                    <PageTitle>Editar perfil</PageTitle>
                    <InputArea>
                        <InputLabel>
                            <InputLabelText>Nome:</InputLabelText>
                            <SingInput
                                IconSvg={AccountIcon}
                                placeholder="Digite seu nome"
                                value={userInfo.name}
                            />
                        </InputLabel>
                        <InputLabel>
                            <InputLabelText>E-mail:</InputLabelText>
                            <SingInput
                                IconSvg={EmailIcon}
                                placeholder="Digite seu e-mail"
                                value={userInfo.email}
                            />
                        </InputLabel>
                        <InputLabel>
                            <InputLabelText>Senha:</InputLabelText>
                            <SingInput
                                IconSvg={LockIcon}
                                placeholder="Digite sua senha"
                                value=""
                            />
                        </InputLabel>
                        <ButtonArea onPress={handleUpdateUserClick}>
                            <CheckIcon width="18" height="18" stroke={colors.light} />
                            <ButtonAreaText>Atualizar dados</ButtonAreaText>
                        </ButtonArea>
                    </InputArea>
                </PageBody>
            </Scroller>
        </Container>
    )
}