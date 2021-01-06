import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const MenuItem = ({ icon, title, text }) => {
  return (
    <Container>
      <IconView>
        <Ionicons name={icon} size={24} color="#546bfb" />
      </IconView>
      <Content>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Content>
    </Container>
  );
};

export default MenuItem;

const Container = styled.View`
  flex-direction: row;
  margin: 15px 0;
`;

const IconView = styled.View`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
`;

const Content = styled.View`
  padding-left: 10px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: #3c4560;
`;

const Text = styled.Text`
  font-weight: 600;
  color: #3c4560;
  opacity: 0.6;
  margin-top: 5px;
`;
