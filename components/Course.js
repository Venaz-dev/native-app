import React from "react";
import styled from "styled-components/native";

const Card = ({ title, image, caption, logo, subtitle, avatar, author }) => {
  return (
    <Container>
      <Cover>
        <Image source={image} />
        <Section>{subtitle}</Section>
        <Title>{title}</Title>
        <Logo source={logo} resizeMode="contain" />
      </Cover>
      <Content>
        <Avatar source={avatar} />
        <Wrapper>
          <Caption>{caption}</Caption>
          <Author>Taught by {author}</Author>
        </Wrapper>
      </Content>
    </Container>
  );
};

export default Card;

const Content = styled.View`
  padding-left: 10px;
  padding-right: 10px;
  flex-direction: row;
  align-items: center;
  height: 90px;
`;

const Wrapper = styled.View`
  margin-left: 10px;
`;

const Logo = styled.Image`
  height: 30px;
  width: 30px;
  position: absolute;
  top: 15px;
  left: 20px;
`;

const Avatar = styled.Image`
  height: 35px;
  width: 35px;
  border-radius: 50px;
`;

const Caption = styled.Text`
  color: #3c4560;
  font-size: 13px;
  font-weight: 600;
  width: 140px;
`;

const Author = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 12px;
`;

const Container = styled.View`
  background: white;
  width: 200px;
  height: 250px;
  border-radius: 14px;
  margin-right: 10px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
  width: 100%;
  height: 160px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Section = styled.Text`
  position: absolute;
  bottom: 70px;
  left: 20px;
  font-weight: 700;
  font-size: 16px;
  color: #b8bece;
  text-transform: uppercase;
`;

const Title = styled.Text`
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 18px;
  color: white;
  width: 170px;
  font-weight: 700;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
