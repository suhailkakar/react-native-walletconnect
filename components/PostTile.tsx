import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Feather, AntDesign } from "@expo/vector-icons";
import { widthToDp, heightToDp } from "rn-responsive-screen";

type PostProps = {
  username: string;
  avatar: string;
  photo: string;
  caption: string;
  likes: number;
};

export default function Post({
  username,
  avatar,
  photo,
  caption,
  likes,
}: PostProps) {
  return (
    <View
      style={{ marginHorizontal: widthToDp(2), marginTop: 10, marginBottom: 5 }}
    >
      <View style={styles.header}>
        <View style={styles.profile}>
          <Image
            source={{
              uri:
                avatar ||
                "https://ui-avatars.com/api/?background=0D8ABC&color=fff&size=512&name=" +
                  username,
            }}
            style={styles.avatar}
          />

          <Text style={styles.username}>{username}</Text>
        </View>
        <Feather name="more-horizontal" size={22} color="#000" />
      </View>
      {photo && (
        <Image
          source={{
            uri: photo,
          }}
          style={styles.image}
        />
      )}
      <View style={styles.actionsContainer}>
        <View style={styles.actions}>
          <AntDesign
            onPress={() => likePost()}
            name={"hearto"}
            size={22}
            color={"#000"}
            style={{ marginRight: 10 }}
          />
          <Feather
            name="message-circle"
            size={22}
            color="#000"
            style={{ marginRight: 10 }}
          />
          <Feather
            name="send"
            size={22}
            color="#000"
            style={{ marginRight: 10 }}
          />
        </View>
        <Feather name="bookmark" size={22} color="#000" />
      </View>
      <View style={styles.caption}>
        <Text style={styles.captionText}>
          <Text
            style={[
              styles.username,
              {
                fontWeight: "bold",
                marginLeft: 0,
              },
            ]}
          >
            {username}
          </Text>
          {` `}
          {caption}
        </Text>
      </View>
      <Text style={styles.commentText}>View all {likes} comments</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  username: {
    fontWeight: "500",
    marginLeft: 5,
    fontSize: 14,
    marginTop: 2,
  },
  image: {
    width: widthToDp(100),
    height: heightToDp(100),
    marginLeft: widthToDp(-2),
    marginTop: heightToDp(4),
  },

  profile: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 25,
  },
  caption: {
    marginTop: heightToDp(2),
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: heightToDp(3),
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
  },
  captionText: {
    fontSize: 14,
    color: "#000",
    lineHeight: 18,
  },
  commentText: {
    fontSize: 14,
    color: "#5e5e5e",
    lineHeight: 18,
    marginTop: heightToDp(2),
  },
});
