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
import AsyncStorage from "@react-native-community/async-storage";
import React, { useState, useEffect, useCallback } from "react";
import { Audio } from "expo-av";
import soundColor from "../../DB/colorSound";
import styles from "../../assets/style/styles";
import PopupLock from "../Components/PopupLock";
import PopupDiamond from "../Components/PopupDiamond";
import Navbar from "../Components/Navbar";
const Alphabet = ({ navigation }) => {
  const [selectLetter, setSelectLetter] = useState("");
  const { width, height } = Dimensions.get("window");
  const [arrRequire, SetReq] = useState(soundColor[0].letterSound);
  const [selectedId, setSelectedId] = useState(null);
  const [coins, setCoins] = useState(coins);
  const [Diamond, setDiamond] = useState(soundColor[0].totalDiamond);
  const [Levels, setLevels] = useState(soundColor[0].levels);
  const [sound, setSound] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleDiamond, setModalVisibleDiamond] = useState(false);
  const STORAGE_KEY = "@save_coins";

  const toggleLockModal = () => {
    setModalVisible(!modalVisible);
  };

  const toggleDiamondModal = () => {
    setModalVisibleDiamond(!modalVisibleDiamond);
  };

  const playSound = async (itmes, indexSound) => {
    if (itmes.buy) {
      // console.log("Loading Sound");
      const { sound } = await Audio.Sound.createAsync(indexSound);
      setSound(sound);
      // console.log("Playing Sound");
      await sound.playAsync();
    }
  };

  const Item = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        playSound(item, item.soundColor), increaseCoins(item);
      }}
    >
      <Image
        source={item.img}
        style={{
          height: 100,
          width: 150,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          resizeMode: "contain",
          margin: 25,
          marginVertical: 50,
        }}
      />
      {!item.buy ? (
        <>
          <View style={{ position: "absolute" }}>
            <TouchableOpacity
              // key={item.id}
              onPress={() => buyLetter(item)}
              style={{ right: -40, top: 20, marginBottom: 0 }}
            >
              <Image
                style={styles.lock}
                source={require("../../assets/images/lock1.png")}
              />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );

  useEffect(() => {
    saveData(coins);
    let count = soundColor[0].letterSound.filter((letter) => letter.buy).length;
    if (count >= (Diamond + 3) * 2) {
      setDiamond(Diamond + 1);
      toggleDiamondModal();
    }
    return sound
      ? () => {
          // console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const increaseCoins = (item) => {
    if (item.buy) {
      setCoins(coins + item.count);
      saveData(coins);
      // soundLetter[0].totalPrice = coins;
    }
  };

  const buyLetter = (item) => {
    // console.log("suheib");
    if (coins >= item.price) {
      item.unLockSound;
      item.buy = true;
      playSound(item, item.unLockSound);
      setCoins(coins - item.price);
      saveData(coins);
    } else {
      toggleLockModal();
      setSelectLetter(item);
    }
  };
  const renderItem = ({ item }) => {
    // const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        key={item.key}
        // style={{ backgroundColor }}
      />
    );
  };
  const cheakData = async () => {
    try {
      let value = await AsyncStorage.getItem(STORAGE_KEY);

      if (value == null) {
        AsyncStorage.setItem(STORAGE_KEY, "0");
      }
    } catch (e) {
      console.log("Failed to save the data to the storage");
    }
  };
  const saveData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, coins.toString());
      console.log("Data successfully saved");
    } catch (e) {
      console.log("Failed to save the data to the storage");
    }
  };
  const readData = async () => {
    try {
      const userCoins = await AsyncStorage.getItem("@save_coins");

      console.log("Read", userCoins);
      if (userCoins !== null) {
        // saveData(parseInt(userCoins) + 1);
        setCoins(parseInt(userCoins));
      }
    } catch (e) {
      console.log(e);
    }
  };
  const didBlurSubscription = navigation.addListener("didFocus", () =>
    readData()
  );
  const keyExtractor = useCallback((item) => item.id.toString(), []);
  return (
    <View style={styles.container}>
      <Navbar coins={coins} Diamond={Diamond} Levels={Levels} />
      <View style={styles.letters}>
        <FlatList
          data={arrRequire}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          extraData={selectedId}
          numColumns={2}
        />
      </View>
      {modalVisible || modalVisibleDiamond ? (
        <View style={styles.divider}></View>
      ) : null}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <PopupLock
            closeModal={() => toggleLockModal()}
            selectLetter={selectLetter}
          />
        </View>
      </Modal>

      <Modal
        animationType="push"
        transparent={true}
        visible={modalVisibleDiamond}
        onRequestClose={() => {
          setModalVisibleDiamond(!modalVisibleDiamond);
        }}
      >
        <View style={styles.centeredView}>
          <PopupDiamond closeModal={() => toggleDiamondModal()} />
        </View>
      </Modal>
    </View>
  );
};
export default Alphabet;
