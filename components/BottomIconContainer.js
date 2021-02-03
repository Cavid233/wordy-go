import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableNativeFeedback,
} from "react-native";

let width_100 = Math.round(Dimensions.get("window").width / 100); // 4 cixi j7-de

const BottomIconContainer = (props) => {
  const { restartHandler, nextTestHandler, previousTestHandler } = props;
  let functionHandler;

  if (restartHandler) {
    functionHandler = restartHandler;
  } else if (nextTestHandler) {
    functionHandler = nextTestHandler;
  } else if (previousTestHandler) {
    functionHandler = previousTestHandler;
  }
  return (
    <View style={props.center ? styles.centeredIcon : styles.leftAndRightIcon}>
      <TouchableNativeFeedback onPress={functionHandler}>
        <View style={styles.questionButtonOpacity}>{props.children}</View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  leftAndRightIcon: {
    height: "50%",
    width: "38%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    // borderColor: '#D7D7D7', // New 
    borderColor: "rgb(172, 172, 172)",

    borderRadius: width_100 * 5,
    backgroundColor: "white",
    overflow: "hidden",
    marginBottom: 3,
  },
  centeredIcon: {
    width: "20%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgb(172, 172, 172)",

    // borderColor: '#D7D7D7', // New C
    // borderRadius: 20,
    borderRadius: width_100 * 5,
    backgroundColor: "white",
    elevation: 10,
    overflow: "hidden",
  },
  questionButtonOpacity: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BottomIconContainer;
