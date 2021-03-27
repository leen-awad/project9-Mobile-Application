import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    flexDirection: "row",
    backgroundColor: "#FAF5F1",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
  },
  lock: {
    height: 150,
    width: 120,
  },
  letter: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 50,
    paddingVertical: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#333",
  },
  buttonClose: {
    backgroundColor: "#333",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  divider: {
    width: width,
    height: height,
    position: "absolute",
    opacity: 0.5,
    backgroundColor: "#000",
  },
  items: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    height: "auto",
    width: 300,
    alignSelf: "center",
    marginBottom: 20,
    elevation: 3,
  },

  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 15,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    maxWidth: 200,
    marginBottom: 5,
    left: 5,
  },
  body: {
    maxWidth: 200,
    left: 5,
  },
  edit: {
    alignSelf: "center",
    left: 5,
    marginLeft: 15,
  },
  delete: {
    // flex: 1,
  },
  modalClose: {
    alignSelf: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    // marginBottom: 60,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  btn: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "red",
    marginTop: 20,
  },
});

export default styles;
