import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  Modal,
  TextInput,
  Text,
  ScrollView,
  ImageBackground,
  Pressable,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Task from "../Components/Task";
import TaskForm from "./AddTask";
import filter from "lodash.filter";
import { Feather } from "@expo/vector-icons";

export default function App() {
  const [modal, setModal] = useState(false);
  const [query, setQuery] = useState("");
  const [searchedDate, setSearchedData] = useState([]);
  const [tasks, setTask] = useState([]);

  //========== Add a task=============
  const addTask = (task) => {
    if (task.title != "" && task.body != "") {
      task.key = Math.random().toString();
      setTask((currentTasks) => {
        return [task, ...currentTasks];
      });
      setSearchedData((currentTasks) => {
        return [task, ...currentTasks];
      });
      setModal(false);
    } else {
      Alert.alert("OOPS!", "You need to write something", [
        {
          text: "Ok",
          onPress: () => console.log("Alert closed"),
        },
      ]);
    }
  };
  //=========== Edit task ============
  const editTask = (values) => {
    const update = tasks.filter((task) => {
      if (task.key === values.key) {
        return task;
      }
    });
    update.map((task) => {
      (task.body = values.body), (task.title = values.title);
    });
  };
  // ============Delete task============
  const completeTask = (task) => {
    setTask((itemsCopy) => {
      return itemsCopy.filter((todo) => todo.key != task);
    });
    setSearchedData((itemsCopy) => {
      return itemsCopy.filter((todo) => todo.key != task);
    });
  };

  // ============Handling The search =================
  const handleSearch = (text) => {
    console.log(tasks, searchedDate);
    const filteredData = filter(searchedDate, (task) => {
      return contains(task, text);
    });
    setTask(filteredData);
    setQuery(text);
  };

  const contains = ({ title, body }, query) => {
    if (title.includes(query) || body.includes(query)) {
      return true;
    }
    return false;
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/images/BackgroundAppWithout.png")}
    >
      <View style={styles.container}>
        <View style={styles.searchWrapper}>
          <Feather name="search" style={styles.iconStyle} />
          <TextInput
            onChangeText={handleSearch}
            value={query}
            placeholder="Search Here ..."
            style={styles.searchInput}
          />
        </View>

        {/* Start add model */}
        <Modal animationType="slide" transparent={true} visible={modal}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TaskForm addTask={addTask} />
              <Pressable style={styles.btn} onPress={() => setModal(false)}>
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
        <View style={styles.addWrapper}>
          <MaterialIcons
            style={styles.modalClose}
            name="add"
            onPress={() => setModal(true)}
            size={34}
          />
        </View>
        {/* End add model */}
        {/* View Todos */}
        <View style={styles.items}>
          <FlatList
            data={tasks}
            keyExtractor={(id) => id.key.toString()}
            renderItem={({ item, index }) => {
              return (
                <ScrollView contentContainerStyle={styles.contentContainer}>
                  <Task
                    item={item}
                    completeTask={completeTask}
                    editTask={editTask}
                    index={index}
                  />
                </ScrollView>
              );
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#EB9F4B",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 25,
    marginRight: 10,
    alignSelf: "center",
  },
  items: {
    // marginTop: 30,
  },
  addWrapper: {
    backgroundColor: "#fff",
    marginTop: 10,
    alignSelf: "center",
    borderRadius: 20,
    borderWidth: 1,
    padding: 10,
    borderColor: "#F2F2F2",
    elevation: 2,
  },
  modal: {
    marginTop: 50,
    marginBottom: 20,
  },
  modalClose: {
    alignSelf: "center",
  },
  iconStyle: {
    fontSize: 30,
    alignSelf: "center",
    marginHorizontal: 15,
  },
  searchInput: {
    fontSize: 18,
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  searchWrapper: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 25,
    elevation: 21,
  },
  contentContainer: {
    paddingVertical: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
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
