import React from 'react';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${colors.light};
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    top: 10px;
    left: 5px;
    z-index: 9;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
`;

export const PageBody = styled.View`
    background-color: ${colors.light};
    border-top-left-radius: 50px;
    margin-top: -50px;
`;

export const UserInfoArea = styled.View`
    flex-direction: row;
    margin-top: -30px;
`;

export const UserInfo = styled.View`
    flex: 1;
    justify-content: flex-end;
    margin-bottom: 5px;
`;

export const UserInfoName = styled.Text`
    color: ${colors.dark};
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const UserAvatar = styled.Image`
    width: 110px;
    height: 110px;
    border-radius: 20px;
    margin-left: 30px;
    margin-right: 15px;
    border-width: 4px;
    border-color: ${colors.light};
`;

export const UserFavButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    background-color: ${colors.light};
    border: 2px solid ${colors.light};
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    margin: 20px 20px 0 20px;
`;

export const ServiceArea = styled.View`
    margin-top: 30px;
`;

export const ServiceItem = styled.View`
    flex-direction: row;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 20px;
`;

export const ServicesTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${colors.tertiary};
    margin-left: 30px;
    margin-bottom: 20px;
`;

export const ServiceInfo = styled.View`
    flex: 1;
`;

export const ServiceName = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${colors.tertiary};
`;

export const ServicePrice = styled.Text`
    font-size: 14px;
    color: ${colors.tertiary};
`;

export const ServiceButton = styled.TouchableOpacity`
    background-color: ${colors.secondary};
    border-radius: 10px;
    padding: 10px 15px;
`;

export const ServiceButtonText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: ${colors.light};
`;

export const TestimonialArea = styled.View`
    height: 110px;
    margin-top: 30px;
    margin-bottom: 50px;
`;

export const TestimonialItem = styled.View`
    background-color: ${colors.tertiary};
    padding: 15px;
    border-radius: 10px;
    height: 110px;
    justify-content: center;
    margin: 0 50px;
`;

export const TestimonialInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5px;
`;

export const TestimonialName = styled.Text`
    color: ${colors.light};
    font-size: 14px;
    font-weight: bold;
`;

export const TestimonialBody = styled.Text`
    color: ${colors.light};
    font-size: 13px;
`;

export const SwiperDot = styled.View`
    width: 10px;
    height: 10px;
    background-color: ${colors.light};
    border-radius: 5px;
    margin: 3px;
`;

export const SwiperDotActive = styled.View`
    width: 10px;
    height: 10px;
    background-color: ${colors.dark};
    border-radius: 5px;
    margin: 3px;
`;

export const SwiperItem = styled.View`
    flex: 1;
    background-color: ${colors.primary};
`;

export const SwiperImage = styled.Image`
    width: 100%;
    height: 240px;
`;

export const FakeSwiper = styled.View`
    height: 140px;
    background-color: ${colors.primary};
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;
