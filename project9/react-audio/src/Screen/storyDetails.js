import React from "react";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import { WebView } from "react-native-webview";

const { width, height } = Dimensions.get("window");

export default function Home(props) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const { navigation } = props;
  const itemId = navigation.getParam("item", {});
  return (
    <View style={styles.container}>
      <WebView
        source={{
          html: `<iframe width="100%" height="100%" src=${itemId.video} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`,
        }}
        style={{
          marginBottom: 50,
          marginLeft: -90,
          backgroundColor: "#FBF5F2",
          transform: [{ rotate: "90deg" }],
          width: 550,
          height: 100,
        }}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    padding: 20,
    flex: 1,
    backgroundColor: "#FBF5F2",
  },

  //   card: {
  //     backgroundColor: "red",
  //     marginBottom: 10,
  //     marginLeft: "2%",
  //     width: "96%",
  //     shadowColor: "#FFFFFF",
  //     shadowOpacity: 1,
  //     shadowOffset: {
  //       width: 3,
  //       height: 3,
  //     },
  //   },
  //   titleText: {
  //     color: "#333",
  //     fontWeight: "bold",
  //     fontSize: 25,
  //     marginTop: 10,
  //     textAlign: "center",
  //   },
  //   titleText1: {
  //     fontWeight: "normal",
  //     fontSize: 20,
  //   },
});
