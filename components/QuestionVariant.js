import React from "react";

import { TouchableNativeFeedback, StyleSheet, View, Text, Dimensions } from "react-native";

let width_100 = Math.round(Dimensions.get("window").width / 100) ;  // 4 cixi j7-de

const QuestionVariant = (props) => {
  return (
    <View style={styles.questionButtons}>
      <TouchableNativeFeedback onPress={props.resultHandler}>
        <View style={styles.questionButtonOpacity}>
          <Text style={styles.questionAnswerText}>{props.title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
    questionButtons: {
        width: "100%",
        height: "20%",
        backgroundColor: "rgb(255, 255, 255);",
        marginTop: Dimensions.get("window").width / 30,
        // borderRadius: 5,
        borderRadius: width_100 + 1,
        // borderBottomRightRadius: 20,
        borderBottomRightRadius: width_100 * 5,
        // borderTopLeftRadius: 20,
        borderTopLeftRadius: width_100 * 5,
        borderColor: "rgb(172, 172, 172)",
        borderWidth: 1,
        elevation: 15,
        overflow: "hidden",
      },
      questionButtonOpacity: {
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      },
      questionAnswerText: {
        fontSize: Dimensions.get("window").width / 20,
        // color: "green",
        color: "#5A5A5A",
      },
    
    
});

export default QuestionVariant;
