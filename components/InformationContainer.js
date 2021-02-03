import React from "react";

import { Dimensions, StyleSheet, View, Text } from "react-native";

let width_100 = Math.round(Dimensions.get("window").width / 100); // 4 cixi j7-de

import InformationElement from "./InformationElement";

const InformationConatiner = (props) => {
  return (
    <View style={styles.navbarContainer}>
      <View style={styles.InformationConatiner}>
        <InformationElement iconName="exclamationcircleo" Color="red" />
        <InformationElement iconName="questioncircleo" Color="#9A5AB0" />
        <InformationElement iconName="checkcircleo" Color="green" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({


  navbarContainer: {
    height: "10%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  InformationConatiner: {
    flexDirection: "row",
    height: "75%",
    width: "90%",
    justifyContent: "center",
  },

});

export default InformationConatiner;
