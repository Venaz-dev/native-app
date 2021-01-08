import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SectionScreen = (props) => {
  const { navigation } = props;
  const section = navigation.getParam("section");
  return (
    <Container>
      <Cover>
        <Image source={section.image} />
        <Title>{section.title}</Title>
        <Wrapper>
          <Logo source={section.logo} />
          <Caption>{section.caption}</Caption>
        </Wrapper>
        <Subtitle>{section.subtitle}</Subtitle>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            position: "absolute",
            top: 70,
            right: 20,
            zIndex: 1,
          }}
        >
          <CloseView>
            <Ionicons name="ios-close" size={30} color="#546bfb" />
          </CloseView>
        </TouchableOpacity>
      </Cover>
      <Text>{section.title}</Text>
    </Container>
  );
};

export default SectionScreen;

const Container = styled.View`
  flex: 1;
`;

const Cover = styled.View`
  width: 100%;
  height: 375px;
  background: black;
`;

const Image = styled.Image`
  height: 100%;
  width: 100%;
`;

const Title = styled.Text`
  position: absolute;
  top: 120px;
  left: 20px;
  font-size: 25px;
  color: white;
  width: 200px;
  font-weight: 600;
`;
const Wrapper = styled.View`
  position: absolute;
  top: 70px;
  left: 20px;
  flex-direction: row;
  align-items: center;
`;

const Logo = styled.Image`
  height: 25px;
  width: 25px;
`;
const Caption = styled.Text`
  color: #3c4560;
  font-size: 16px;
  font-weight: 600;
  margin-left: 10px;
  text-transform: uppercase;
`;

const Subtitle = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  position: absolute;
  left: 20px;
  bottom: 20px;
`;

const CloseView = styled.View`
  height: 35px;
  width: 35px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const Text = styled.Text``;

const Button = styled.Button``;
