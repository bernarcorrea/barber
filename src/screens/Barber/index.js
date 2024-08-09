import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import colors from '../../styles/colors';

import {
    Container,
    Scroller,
    FakeSwiper,
    PageBody,
    ServiceArea,
    ServicesTitle,
    ServiceItem,
    ServiceInfo,
    ServiceName,
    ServicePrice,
    ServiceButton,
    ServiceButtonText,
    TestimonialArea,
    TestimonialItem,
    TestimonialInfo,
    TestimonialName,
    TestimonialBody,
    SwiperDot,
    SwiperDotActive,
    SwiperItem,
    SwiperImage,
    UserInfoArea,
    UserAvatar,
    UserInfo,
    UserInfoName,
    UserFavButton,
    BackButton,
    LoadingIcon,

} from './style';

import BarberModal from '../../components/BarberModal';
import Stars from '../../components/Stars';
import FavoriteIcon from '../../assets/favorite.svg';
import FavoriteFullIcon from '../../assets/favorite_full.svg';
import BackIcon from '../../assets/back.svg';
import NavPrevIcon from '../../assets/nav_prev.svg';
import NavNextIcon from '../../assets/nav_next.svg';

import Api from '../../Api';

export default () => {
    const navigation = useNavigation();
    const route = useRoute();

    const handleBackButton = () => {
        navigation.goBack();
    }

    const handleFavClick = () => {
        setFavorited(!favorited);
    }

    const handleServiceChoose = (key) => {
        setSelectedService(key);
        setShowModal(true);
    }

    const [userInfo, setUserInfo] = useState({
        id: route.params.id,
        avatar: route.params.avatar,
        name: route.params.name,
        stars: route.params.stars
    });

    const [loading, setLoading] = useState(false);
    const [favorited, setFavorited] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const getBarberinfo = async () => {
            setLoading(true);

            let json = await Api.getBarber(userInfo.id);
            if (json.error == '') {
                setUserInfo(json.data);
                setFavorited(json.data.favorited)
            } else {
                alert('Erro: ' + json.error);
            }

            setLoading(false);
        }
        getBarberinfo();
    }, []);

    return (
        <Container>
            <Scroller>
                {userInfo.photos && userInfo.photos.length > 0 ?
                    <Swiper
                        style={{ height: 240 }}
                        dot={<SwiperDot />}
                        activeDot={<SwiperDotActive />}
                        paginationStyle={{ top: 15, right: 15, bottom: null, left: null }}
                        autoplay={true}
                    >
                        {userInfo.photos.map((item, key) => (
                            <SwiperItem key={key}>
                                <SwiperImage source={{ uri: item.url }} resizeMode="cover" />
                            </SwiperItem>
                        ))}
                    </Swiper>
                    :
                    <FakeSwiper></FakeSwiper>
                }
                <PageBody>
                    <UserInfoArea>
                        <UserAvatar source={{ uri: userInfo.avatar }} />
                        <UserInfo>
                            <UserInfoName>{userInfo.name}</UserInfoName>
                            <Stars stars={userInfo.stars} showNumber={true} />
                        </UserInfo>
                        <UserFavButton onPress={handleFavClick}>
                            {favorited ?
                                <FavoriteFullIcon width="24" height="24" fill={colors.red} />
                                :
                                <FavoriteIcon width="24" height="24" fill={colors.red} />
                            }
                        </UserFavButton>
                    </UserInfoArea>
                    {loading &&
                        <LoadingIcon size="large" color={colors.dark} />
                    }
                    {userInfo.services &&
                        <ServiceArea>
                            <ServicesTitle>Lista de serviços</ServicesTitle>
                            {userInfo.services.map((item, key) => (
                                <ServiceItem key={key}>
                                    <ServiceInfo>
                                        <ServiceName>{item.name}</ServiceName>
                                        <ServicePrice>R$ {item.price.toFixed(2)}</ServicePrice>
                                    </ServiceInfo>
                                    <ServiceButton onPress={() => handleServiceChoose(key)}>
                                        <ServiceButtonText>Agendar</ServiceButtonText>
                                    </ServiceButton>
                                </ServiceItem>
                            ))}
                        </ServiceArea>
                    }
                    {userInfo.testimonials && userInfo.testimonials.length > 0 &&
                        <TestimonialArea>
                            <Swiper
                                style={{ height: 110 }}
                                showsPagination={false}
                                showsButtons={true}
                                prevButton={<NavPrevIcon width="35" height="35" fill={colors.dark} />}
                                nextButton={<NavNextIcon width="35" height="35" fill={colors.dark} />}
                            >
                                {userInfo.testimonials.map((item, key) => (
                                    <TestimonialItem key={key}>
                                        <TestimonialInfo>
                                            <TestimonialName>{item.name}</TestimonialName>
                                            <Stars stars={item.rate} showNumber={false} />
                                        </TestimonialInfo>
                                        <TestimonialBody>{item.body}</TestimonialBody>
                                    </TestimonialItem>
                                ))}
                            </Swiper>
                        </TestimonialArea>
                    }
                </PageBody>
            </Scroller>

            <BackButton onPress={handleBackButton}>
                <BackIcon width="44" height="44" fill={colors.light} />
            </BackButton>

            <BarberModal 
                show={showModal}
                setShow={setShowModal}
                user={userInfo}
                service={selectedService}
            />
        </Container >
    )
}