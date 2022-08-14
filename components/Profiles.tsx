import { ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { Lens } from "lens-protocol";
import { widthToDp } from "rn-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";

export default function Profiles() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await Lens.ExploreProfiles("MOST_FOLLOWERS");
      let AllData = response.data.exploreProfiles.items;
      let filteredData = AllData.filter((user) => {
        return user?.picture?.original?.url;
      });
      setUsers(filteredData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <>
        {users.map((user, index) => (
          <LinearGradient
            colors={["#125BE4", "#14A3F4"]}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 1.0 }}
            style={{
              width: widthToDp(18.2),
              height: widthToDp(18.2),
              margin: widthToDp(1),
              marginTop: widthToDp(2),
              borderRadius: widthToDp(18.2 / 2),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity style={styles.imageContainer}>
              <Image
                source={{
                  uri:
                    user?.picture?.original?.url ||
                    "https://www.dcrc.co/wp-content/uploads/2019/04/blank-head-profile-pic-for-a-man.jpg",
                }}
                style={styles.image}
              />
            </TouchableOpacity>
          </LinearGradient>
        ))}
      </>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: widthToDp(-1),
  },

  image: {
    width: widthToDp(15),
    height: widthToDp(15),
    borderRadius: widthToDp(8),
  },
  heading: {
    marginLeft: widthToDp(1),
    marginTop: widthToDp(2),
    color: "#fff",
    fontSize: widthToDp(4),
    fontWeight: "600",
  },
  skeletonContainer: {
    width: widthToDp(100),
  },
  imageContainer: {
    width: widthToDp(16.5),
    height: widthToDp(16.5),
    borderRadius: widthToDp(16.5 / 2),
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
