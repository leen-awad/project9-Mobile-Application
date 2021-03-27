import { Text, Pressable, View, Image } from "react-native";
import styles from "../../assets/style/styles";
import React from "react";
const PopupDiamond = React.memo(({ closeModal }) => {
  return (
    <View style={styles.modalView}>
      <Image
        source={require("../../assets/images/success.png")}
        style={{
          height: 200,
          width: 200,
          marginVertical: 10,
          marginHorizontal: 10,
        }}
      />

      <Pressable
        style={[styles.button, styles.buttonClose]}
        onPress={closeModal}
      >
        <Text style={styles.textStyle}>Close</Text>
      </Pressable>
    </View>
  );
});

export default PopupDiamond;
