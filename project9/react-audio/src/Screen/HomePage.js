import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Button,
  Dimensions,
  ImageBackground,
} from "react-native";
import Navbar from "../Components/Navbar";
import DATA from "../../DB/database";
import soundLetter from "../../DB/alphabetSound";
import AsyncStorage from "@react-native-community/async-storage";
// import { useState } from "react/cjs/react.development";
const { width, height } = Dimensions.get("window");
console.disableYellowBox = true;
const HomePage = ({ navigation }) => {
  // const { width, height } = Dimensions.get("window");
  const [coins, SetCoins] = useState(0);
  const [diamond, SetDiamond] = useState(0);
  const [name, SetName] = useState("");
  const Item = ({ title, img, page }) => (
    <View style={styles.cat}>
      <TouchableOpacity onPress={() => navigation.navigate(page)}>
        <Image style={{ width: 75, height: 75 }} source={img} />
        <Text style={{ fontWeight: "bold", textAlign: "center" }}>{title}</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.view2}>
      <Item title={item.title} img={item.img} page={item.page} />
    </View>
  );

  const readData = async () => {
    try {
      const userCoins = await AsyncStorage.getItem("@save_coins");
      const userDiamond = await AsyncStorage.getItem("@save_diamond");
      const userName = await AsyncStorage.getItem("@save_name");
      // console.log("Coins", userCoins);
      if (userCoins != null || userName != null || userDiamond != null) {
        SetCoins(parseInt(userCoins));
        SetDiamond(parseInt(userDiamond));
        SetName(userName);
      }
    } catch (e) {
      // SetCoins(0);
      // SetDiamond(0);
      // userName("New User");
      console.log(e);
    }
  };
  const cheakData = async () => {
    try {
      let value = await AsyncStorage.getItem(STORAGE_KEY);
      let diamond = await AsyncStorage.getItem(Diamond_KEY);
      console.log("Coins", value);
      if (value == null || diamond == null) {
        AsyncStorage.setItem(STORAGE_KEY, "0");
        AsyncStorage.setItem(Diamond_KEY, "0");
      }
    } catch (e) {
      console.log("Failed to save the data to the storage");
    }
  };

  const didBlurSubscription = navigation.addListener("didFocus", () =>
    readData()
  );

  // useEffect(() => {
  //   saveData;
  // }, []);
  const clearAsyncStorage = async () => {
    AsyncStorage.clear();
    AsyncStorage.setItem("@save_coins", "0");
    AsyncStorage.setItem("@save_diamond", "0");
  };
  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/images/BackgroundAppWithout.png")}
    >
      <View style={styles.container}>
        <View style={styles.boxAll}>
          {coins != null || diamond != null ? (
            <Navbar coins={coins} Diamond={diamond} Levels={0} />
          ) : (
            <Navbar coins={0} Diamond={0} Levels={0} />
          )}

          {/* START BOX1 */}
          <View style={styles.view1}>
            <Image
              style={{ width: 60, height: 60 }}
              source={require("../../assets/images/user.png")}
            />
            <View style={{ marginLeft: 10, marginTop: 5 }}>
              <Text>Hello</Text>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>{name}</Text>
            </View>

            <TouchableOpacity
              // title="Reset"
              onPress={() => clearAsyncStorage()}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "red",
                padding: 10,
              }}
            >
              <Text>Reset</Text>
            </TouchableOpacity>
          </View>
          {/* END BOX1 */}

          {/* START BOX2 */}
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              numColumns={2}
            />
          </View>
          {/* END BOX2 */}
        </View>
      </View>
      {/* Start Footer */}
      <View style={{ bottom: 35, position: "absolute" }}>
        <Image
          source={require("../../assets/images/Ground.png")}
          style={{
            width: width,
          }}
          resizeMode="contain"
        />
      </View>

      {/* End Footer */}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    // backgroundColor: "#E4D9CD",
  },
  view1: {
    marginLeft: 30,
    marginTop: 80,
    paddingTop: 5,
    flexDirection: "row",
  },
  view2: {
    alignItems: "center",
    justifyContent: "center",
  },
  cat: {
    backgroundColor: "red",
    margin: 10,
    backgroundColor: "#FFF",
    width: 140,
    height: 140,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 15,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default HomePage;
