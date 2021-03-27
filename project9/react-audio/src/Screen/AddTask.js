import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
  Text,
} from "react-native";

import { Formik } from "formik";

const AddTask = ({ addTask }) => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ title: "", body: "" }}
        // validationSchema={noteSchema}
        onSubmit={(values) => {
          addTask(values);
        }}
      >
        {(props) => (
          <View>
            <View style={styles.noteWrapper}>
              <TextInput
                style={styles.titleInput}
                placeholder="Note Title"
                onChangeText={props.handleChange("title")}
                value={props.values.title}
              />

              <TextInput
                multiline
                style={styles.bodyInput}
                placeholder="Note Body"
                onChangeText={props.handleChange("body")}
                value={props.values.body}
              />
            </View>

            <Pressable style={styles.btn} onPress={props.handleSubmit}>
              <Text style={styles.textStyle}>Add</Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
};
export default AddTask;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  noteWrapper: {
    // flexDirection: 'row',
  },
  titleInput: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#fff",
    elevation: 2,
    borderRadius: 20,
    width: 230,
    marginBottom: 10,
  },
  bodyInput: {
    paddingHorizontal: 10,
    paddingVertical: 25,
    backgroundColor: "#fff",
    elevation: 2,
    borderRadius: 20,
    width: 230,
    marginBottom: 20,
  },
  btn: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderColor: "#C0C0C0",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    left: 30,
    borderWidth: 1,
  },
  btn: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
