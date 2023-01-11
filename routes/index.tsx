import { View, Text } from "react-native";
import React from "react";
import { Router, Scene, Stack } from "react-native-router-flux";
import Login from "../screens/Login";
import BottomTab from "../components/BottomTab";

export default function Route() {
  return (
    <Router>
      <Stack key="root">
        <Scene key="login" component={Login} title="Login" hideNavBar />
      </Stack>
    </Router>
  );
}
