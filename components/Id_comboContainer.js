import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableNativeFeedback,
} from "react-native";

let width_100 = Math.round(Dimensions.get("window").width / 100); // 4 cixi j7-de
import { AntDesign } from "@expo/vector-icons";

const InformationConatiner = (props) => {
  return (
    <View style={styles.punctuationInformationQuestoinId}>
      <Text style={{...styles.title, color: props.textColor }}>{props.idNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  punctuationInformationQuestoinId: {
    borderWidth: 1,
    borderRadius: width_100 * 5,
    width: "10%",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  title: {
    textAlign: "center",
    fontSize: width_100 * 6.25,
  },
});

export default InformationConatiner;
