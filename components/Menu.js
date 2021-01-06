import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { Animated, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { menuItems } from "../shared/cards";
import MenuItem from "./MenuItem";

const screenHeight = Dimensions.get("window").height;

const Menu = () => {
  const [state, setState] = useState({
    top: new Animated.Value(screenHeight),
  });

  const openMenu = () => {
    Animated.spring(state.top, {
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };

  const closeMenu = () => {
    Animated.spring(state.top, {
      toValue: screenHeight,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    Animated.spring(state.top, {
      toValue: 0,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <AnimatedContainer style={{ top: state.top }}>
      <Cover>
        <Image source={require("../assets/background2.jpg")} />
        <Title>Chibuzo Madu</Title>
        <Subtitle>Front End Developer</Subtitle>
      </Cover>
      <TouchableOpacity
        onPress={closeMenu}
        style={{
          position: "absolute",
          top: 120,
          left: "50%",
          marginLeft: -22,
          zIndex: 1,
        }}
      >
        <CloseView>
          <Ionicons name="ios-close" size={44} color="#546bfb" />
        </CloseView>
      </TouchableOpacity>
      <Content>
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            icon={item.icon}
            title={item.title}
            text={item.text}
          />
        ))}
      </Content>
    </AnimatedContainer>
  );
};

export default Menu;

const Container = styled.View`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
`;
const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 142px;
  background: black;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 8px;
`;

const CloseView = styled.View`
  height: 44px;
  width: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const Content = styled.View`
  height: ${screenHeight}px;
  background: #f0f3f5;
  padding: 50px;
`;
