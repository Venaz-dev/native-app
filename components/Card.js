import React from "react";
import styled from "styled-components/native";

const Card = ({ title, image, caption, logo, subtitle }) => {
  return (
    <Container>
      <Cover>
        <Image source={image} />
        <Title>{title}</Title>
      </Cover>
      <Content>
        <Logo source={logo} />
        <Wrapper>
          <Caption>{caption}</Caption>
          <Subtitle>{subtitle}</Subtitle>
        </Wrapper>
      </Content>
    </Container>
  );
};

export default Card;

const Content = styled.View`
  padding-left: 10px;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
`;

const Wrapper = styled.View`
  margin-left: 10px;
`;

const Logo = styled.Image`
  height: 25px;
  width: 25px;
`;

const Caption = styled.Text`
  color: #3c4560;
  font-size: 16px;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  margin-top: 4px;
`;

const Container = styled.View`
  background: white;
  width: 200px;
  height: 220px;
  border-radius: 14px;

  margin-right: 10px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
  width: 100%;
  height: 150px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Title = styled.Text`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 18px;
  color: white;
  width: 170px;
  font-weight: 600;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
