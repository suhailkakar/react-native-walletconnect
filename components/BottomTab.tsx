import { View, Text } from "react-native";
import React, { useState } from "react";
import { BottomNavigation } from "react-native-paper";
import Home from "../screens/Home";
import { Feather } from "@expo/vector-icons";
import Search from "../screens/search";
export default function BottomTab() {
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    {
      key: "home",
      title: "Home",
      icon: () => <Feather name="home" size={24} color="black" />,
      color: "#fff",
    },
    {
      key: "search",
      title: "Search",
      icon: () => <Feather name="search" size={24} color="black" />,
      color: "#fff",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    search: Search,
  });
  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      activeColor="#4D5359"
      barStyle={{ backgroundColor: "#fff" }}
      inactiveColor="#ffff"
    />
  );
}
