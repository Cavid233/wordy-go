import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

let width_100 = Math.round(Dimensions.get("window").width / 100); // 4 cixi j7-de

// {...props} touchable ozelliyinin oturulmesi ucundur yoxsa audio isdemez
const BottomIconContainer = (props) => {
  return (
    <View style={styles.voiceElement} {...props} >  
      <Text>{props.voiceName}</Text>
      <FontAwesome name= 'volume-up' size={width_100 * 6} color= {props.iconColor} />
      {/* <Text>{"[/heˈləʊ/]"}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
    voiceElement: {
        flexDirection: "row",
    }
});

export default BottomIconContainer;
