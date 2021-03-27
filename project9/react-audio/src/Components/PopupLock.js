import { Text, Pressable, View, Image } from "react-native";
import styles from "../../assets/style/styles";
import React from "react";
const PopupLock = (props) => {
  return (
    <View style={styles.modalView}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={styles.lock}
          source={require("../../assets/images/coins.png")}
          style={{ width: 65, height: 65 }}
        />
        <Text style={(styles.modalText, { fontWeight: "bold", fontSize: 25 })}>
          {props.selectLetter.price}$
        </Text>
      </View>
      <Image
        source={props.selectLetter.img}
        style={{
          height: 200,
          width: 200,
          marginVertical: 10,
          marginHorizontal: 10,
        }}
      />

      <Pressable
        style={[styles.button, styles.buttonClose]}
        onPress={props.closeModal}
      >
        <Text style={styles.textStyle}>Close</Text>
      </Pressable>
    </View>
  );
};

export default PopupLock;
