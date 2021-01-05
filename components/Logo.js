import React from "react";
import styled from "styled-components/native";

const Logo = ({ image, text }) => {
  return (
    <Container>
      <Image source={image} resizeMode="contain" />
      <Text>{text}</Text>
    </Container>
  );
};

export default Logo;

const Container = styled.View`
  flex-direction: row;
  background: white;
  height: 45px;
  padding: 12px 16px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  align-items: center;
  margin: 0 8px;
`;

const Image = styled.Image`
  height: 25px;
  width: 25px;
`;

const Text = styled.Text`
  font-weight: 600;
  font-size: 12px;
  margin-left: 5px;
`;
