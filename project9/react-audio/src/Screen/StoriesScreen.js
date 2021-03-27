import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import Card from "../Components/card";
import Data from "../../DB/Data";
import { ScrollView } from "react-native-gesture-handler";

export default function Home({ navigation }, props) {
  const [reviews, setReviews] = useState(Data);

  return (
    <View style={styles.view}>
      <ScrollView>
        <FlatList
          data={reviews}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("storyDetails", { item })}
            >
              <Card style={styles.card}>
                <Image style={styles.cardImage} source={{ uri: item.img }} />
                <View style={styles.container}></View>
                <Text style={styles.titleText}>{item.title}</Text>
              </Card>
            </TouchableOpacity>
          )}
          numColumns={2}
        />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  cardImage: {
    width: 100,
    height: 100,
    marginLeft: 7,
    marginRight: 5,
    borderRadius: 10,
    marginTop: 24,
  },
  titleText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 15,
    margin: 22,
    textAlign: "center",
  },
  card: {
    padding: 10,
  },
  view: {
    backgroundColor: "#FBF5F2",
  },
});
