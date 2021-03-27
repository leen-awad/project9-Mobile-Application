import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import NoteDetails from "../Screen/TaskDetails";
import styles from "../../assets/style/styles";
const Task = ({ item, completeTask, editTask, index }) => {
  const [editModal, setEditModel] = useState(false);

  return (
    <View style={styles.items}>
      <View style={styles.itemLeft}>
        <MaterialIcons
          style={styles.delete}
          name="delete"
          size={24}
          color="red"
          onPress={() => completeTask(item.key)}
        />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.body}>{item.body}</Text>
        </View>

        <MaterialIcons
          style={styles.edit}
          name="edit"
          size={24}
          onPress={() => {
            setEditModel(true), editTask(item.key);
          }}
        />
      </View>
      <Modal animationType="slide" transparent={true} visible={editModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <NoteDetails
              notes={item}
              onModelClose={(closeModal) => setEditModel(closeModal)}
              editTask={editTask}
            />
            <Pressable style={styles.btn} onPress={() => setEditModel(false)}>
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Cancel
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Task;
