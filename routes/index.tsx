import { View, Text } from "react-native";
import React from "react";
import { Router, Scene, Stack } from "react-native-router-flux";
import Home from "../screens/Home";
import BottomTab from "../components/BottomTab";

export default function Route() {
  return (
    <Router>
      <Stack key="root">
        <Scene key="home" component={BottomTab} title="Home" hideNavBar />
      </Stack>
    </Router>
  );
}
