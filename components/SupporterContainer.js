import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableNativeFeedback } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ModalConatiner from "./Modal";

const SupporterContainer = (props) => {
  const [isYellow, setIsYellow] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    
    <View style={styles.supporterContainer}>

      
      <ModalConatiner toggleModal={toggleModal} isModalVisible={isModalVisible} />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <View> */}

        <TouchableNativeFeedback onPress={toggleModal}>
          <View style={{flexDirection:'row'}}>
            <MaterialCommunityIcons name="menu-down" size={22} color="white" />

            <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
              A1
            </Text>
          </View>
        </TouchableNativeFeedback>

        {/* </View> */}
        
      </View>

      {props.star ? (
        <View style={styles.favoriteContainer}>
          <TouchableNativeFeedback onPress={() => setIsYellow((prev) => !prev)}>
            <View style={styles.favorite}>
              <AntDesign
                name="star"
                size={24}
                color={isYellow ? "white" : "yellow"}
              />
            </View>
          </TouchableNativeFeedback>
        </View>
      ) : null}

      <View style={styles.searchBox}>
        {/* <TextInput
          placeholder="22"
          style={styles.textInput}
          keyboardType="number-pad"
        /> */}
        
        <MaterialIcons name="search" size={24} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  supporterContainer: {
    width: "100%",
    height: "8%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#43C7A3",
    borderBottomEndRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: "row",
  },
  searchBox: {
    // flexDirection: "row",
    // justifyContent: "space-around",
    // alignItems: "center",
    // // width: "35%",
    // backgroundColor: "white",
    // borderRadius: 30,
  },
  textInput: {
    borderColor: "pink",
    // width: 30,
  },
  favoriteContainer: {
    borderRadius: 30,
    overflow: "hidden",
    borderWidth: 0.001,
    borderRadius: 20,
  },
  favorite: {
    padding: 10,
  },
});

export default SupporterContainer;
