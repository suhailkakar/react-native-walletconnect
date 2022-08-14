import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { widthToDp, heightToDp } from "rn-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { Searchbar } from "react-native-paper";
import { Lens } from "lens-protocol";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const handleSearch = () => {
    Lens.search(query, "PROFILE", 10).then((res) => {
      setResults(res.data.search.items);
    });
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <Searchbar
        onSubmitEditing={handleSearch}
        onChangeText={(text) => setQuery(text)}
        value={query}
        placeholder="Search here..."
        style={{
          width: widthToDp(95),
          alignSelf: "center",
          marginTop: heightToDp(2),
        }}
      />
      {results.length > 0 && (
        <FlatList
          data={results}
          contentContainerStyle={{ marginHorizontal: 10 }}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.profile}>
              <Image
                source={{
                  uri: item?.picture?.original?.url,
                }}
                style={styles.avatar}
              />
              <View
                style={{
                  marginLeft: 8,
                }}
              >
                <Text style={styles.username}>{item.name || item.handle}</Text>
                <Text style={styles.date}>
                  {item.stats.totalFollowers} Followers
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  username: {
    fontWeight: "500",
    fontSize: 16,
    color: "#000",
    marginTop: 2,
  },

  profile: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
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
  date: {
    color: "#5e5e5e",
    fontSize: 13,
  },
});
