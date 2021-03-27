import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Button,
  Platform,
  Alert,
  ScrollView,
} from "react-native";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import { useState } from "react/cjs/react.development";
import AsyncStorage from "@react-native-community/async-storage";
const { width, height } = Dimensions.get("window");
const NAME_KEY = "@save_name";
export default function SignInPage({ navigation }) {
  const [TextName, setTextName] = useState("");

  const GoToHomePage = () => {
    if (TextName != "") {
      saveData(TextName);
      navigation.navigate("HomePage");
    } else {
      Alert.alert("Please Enter Your Name");
    }
  };
  const saveData = async () => {
    try {
      await AsyncStorage.setItem(NAME_KEY, TextName);
      console.log("Data successfully saved");
    } catch (e) {
      console.log("Failed to save the data to the storage");
    }
  };
  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/images/BackgroundAppWithout.png")}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        {/* Start Logo */}
        <View>
          <View>
            <Image
              source={require("../../assets/images/TitleLogo1.png")}
              style={{
                width: 200,
                height: 200,
                marginBottom: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
              resizeMode="contain"
            />
          </View>
        </View>
        {/* End Logo */}

        <View style={{ width: "70%", height: 50 }}>
          <TextInput
            placeholder="Enter your Name..."
            backgroundColor="#fff"
            color="#333"
            fontWeight="bold"
            style={{
              flex: 1,
              borderColor: "#ccc",
              borderWidth: 0.5,
              paddingHorizontal: 30,
              borderRadius: 25,
              elevation: 8,
            }}
            onChangeText={(name) => setTextName(name)}
          />
        </View>
        <View style={{ marginTop: 30, zIndex: 10 }}>
          <TouchableOpacity onPress={() => GoToHomePage()}>
            <View
              style={{
                backgroundColor: "#91e093",
                padding: 10,
                paddingHorizontal: 30,
                borderRadius: 20,
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>Go</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Start Footer */}
        <ScrollView
          style={{
            bottom: -40,
            position: "absolute",
            zIndex: 1,
            right: 1,
          }}
        >
          <View>
            <Image
              source={require("../../assets/images/Dinsour.png")}
              style={{
                width: 350,
                height: 350,
              }}
              resizeMode="contain"
            />
          </View>
        </ScrollView>
        <View style={{ bottom: -40, position: "absolute" }}>
          <Image
            source={require("../../assets/images/Ground.png")}
            style={{
              width: width,
            }}
            resizeMode="contain"
          />
        </View>

        {/* End Footer */}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
});
