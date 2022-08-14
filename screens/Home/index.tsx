import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Lens } from "lens-protocol";
import Post from "../../components/PostTile";
import Profiles from "../../components/Profiles";
import { SafeAreaView } from "react-native-safe-area-context";
import { widthToDp, heightToDp } from "rn-responsive-screen";

export default function Home() {
  const [posts, setPosts] = useState([]);

  const getPublications = () => {
    Lens.ExplorePublications("LATEST", ["POST"], 50)
      .then((res) => {
        setPosts(res.data.explorePublications.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPublications();
  }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
      }}
    >
      <ScrollView>
        <Text
          style={{
            fontSize: widthToDp(4),
            marginTop: heightToDp(2),
            fontWeight: "600",
            color: "#000",
            marginLeft: 10,
          }}
        >
          Top Profiles
        </Text>
        <Profiles />
        <Text
          style={{
            fontSize: widthToDp(4),
            marginTop: heightToDp(2),
            fontWeight: "600",
            color: "#000",
            marginLeft: 10,
          }}
        >
          My Feeds
        </Text>
        {posts.map((post) => (
          <Post
            username={post?.profile?.handle}
            photo={post?.metadata?.media[0]?.original.url}
            avatar={post?.profile?.picture?.original?.url}
            caption={post?.metadata?.content}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
