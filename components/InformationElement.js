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
    <View style={{...styles.container, borderColor: props.Color,}}>
      <TouchableNativeFeedback>
        <View
          style={styles.informationBox}
        >
          <AntDesign
            name={props.iconName}
            size={width_100 * 6}
            color={props.Color}
          />
          <Text style={{ ...styles.amountTitle, color: props.Color }}>11</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: "100%",
    height: "100%",
    width: "33%",
    overflow:'hidden',
    borderRadius: width_100 * 5,
    borderWidth: 1,
    marginLeft: 3,  // New

  },
  informationBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",

  },
  amountTitle: {
    marginLeft: width_100 - 1,
  },
});

export default InformationConatiner;
