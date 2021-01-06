import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import styled from "styled-components/native";
import { NotificationIcon } from "./components/Icons";
import Card from "./components/Card";
import cards, { courses } from "./shared/cards";
import logos from "./shared/logos";
import Logo from "./components/Logo";
import Course from "./components/Course";
import Menu from "./components/Menu";

export default function App() {
  return (
    <Container>
      <Menu />
      <TitleBar>
        <Avatar source={require("./assets/avatar.jpg")} />
        <Title>Welcome Back</Title>
        <Name>Chibuzo</Name>
        <NotificationIcon style={{ position: "absolute", top: 5, right: 20 }} />
      </TitleBar>
      <ScrollView style={{ height: "100%", backgroundColor: "#f0f3f5" }}>
        <ScrollView
          style={{
            flexDirection: "row",
            padding: 20,
            paddingLeft: 0,
            paddingTop: 30,
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {logos.map((logo) => (
            <Logo key={logo.id} image={logo.image} text={logo.text} />
          ))}
        </ScrollView>
        <Subtitle>Continue Reading</Subtitle>
        <ScrollView
          horizontal={true}
          style={{ paddingBottom: 30, paddingLeft: 10, paddingRight: 10 }}
          showsHorizontalScrollIndicator={false}
        >
          {cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              image={card.image}
              logo={card.logo}
              subtitle={card.subtitle}
              caption={card.caption}
            />
          ))}
        </ScrollView>
        <Subtitle>Popular Courses</Subtitle>
        <ScrollView
          horizontal={true}
          style={{ paddingBottom: 30, paddingLeft: 10, paddingRight: 10 }}
          showsHorizontalScrollIndicator={false}
        >
          {courses.map((course) => (
            <Course
              key={course.id}
              title={course.title}
              subtitle={course.subtitle}
              image={course.image}
              logo={course.logo}
              author={course.author}
              avatar={course.avatar}
              caption={course.caption}
            />
          ))}
        </ScrollView>
      </ScrollView>
    </Container>
  );
}

const Main = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

const Subtitle = styled.Text`
  font-weight: 700;
  font-size: 13px;
  color: #b8bece;
  margin-left: 10px;
  margin-top: 0px;
  text-transform: uppercase;
`;

const Avatar = styled.Image`
  height: 44px;
  width: 44px;
  background: black;
  border-radius: 50px;
  margin-left: 10px;
  position: absolute;
  top: 0%;
  left: 0;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
  padding-bottom: 20px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f3f5",
    // alignItems: "center",
    // justifyContent: "center",
  },
  topbar: {
    width: "100%",
    marginTop: 50,
    paddingLeft: 80,
  },
  avatar: {
    height: 44,
    width: 44,
    borderRadius: 50,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    color: "#3c4560",
  },
  title: {
    fontSize: 10,
    color: "white",
    textDecorationLine: "underline",
  },
});
