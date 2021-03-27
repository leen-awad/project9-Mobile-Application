import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
  Dimensions,
  Modal,
  Pressable,
} from "react-native";
import styles from "../../assets/style/styles";
const Navbar = (props) => {
  return (
    <View
      style={{
        width: "100%",
        position: "absolute",
        height: 50,
        backgroundColor: "#333",
        top: 0,
        zIndex: 1,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: 2,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 4,
          }}
        >
          <Image
            style={styles.lock}
            source={require("../../assets/images/coins.png")}
            style={{ width: 38, height: 38 }}
          />
          <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
            {" "}
            {props.coins}$
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={styles.lock}
            source={require("../../assets/images/Diamond2.png")}
            style={{
              width: 30,
              height: 30,
              marginHorizontal: 9,
              transform: [{ rotate: "-10deg" }],
            }}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              color: "white",
            }}
          >
            {props.Diamond}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={styles.lock}
            source={require("../../assets/images/stars.png")}
            style={{
              width: 35,
              height: 35,
              marginHorizontal: 9,
              transform: [{ rotate: "-10deg" }],
            }}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              color: "white",
            }}
          >
            {props.Levels}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default Navbar;
