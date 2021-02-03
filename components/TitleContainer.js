import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableWithoutFeedback,
} from "react-native";

import Voice from "./Voice";
import { Audio } from "expo-av";

let width_100 = Math.round(Dimensions.get("window").width / 100); // 4 cixi j7-de

const ljust = ( length, char ) => {
  var fill = [];
  while ( fill.length + this.length < length ) {
    fill[fill.length] = char;
  }
  return fill.join('') + this;
}
const BottomIconContainer = (props) => {
  const [sound, setSound] = useState();

  const playSound = async (soundKind, word) => {
    let source;
    console.log(word.length);
    // let getWord = word.toLowerCase() ;
    let getWord = ljust(word.toLowerCase().length, 5)  ;

    let r2 = `https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/${
      getWord[0]
    }/${getWord.slice(0, 3)}/${getWord.slice(0, 5)}/${getWord}__gb_1.mp3`;
    console.log(r2);

    // https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/n/nic/nice_/nice__gb_1.mp3
    // https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/n/nic/nice/nice__gb_1.mp3

    if (soundKind == "UK") {
      source = {
        uri:
          "https://dictionary.cambridge.org/tr/media/ingilizce/uk_pron/u/ukc/ukcld/ukcld01592.mp3",

          // `https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/${
          //   getWord[0]
          // }/${getWord.slice(0, 3)}/${getWord.slice(
          //   0,
          //   5
          // )}/${getWord}__gb_1.mp3`,
      };
    } else {
      source = {
        uri:
          "https://dictionary.cambridge.org/tr/media/ingilizce/us_pron/d/doc/docto/doctor.mp3",
      };
    }

    const { sound } = await Audio.Sound.createAsync(source);

    setSound(sound);

    await sound.playAsync();
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.wordContainer}>
      <TouchableWithoutFeedback onPress={() => playSound("UK", props.word)}>
        <Voice voiceName="UK" iconColor="red" />
      </TouchableWithoutFeedback>

      <View style={{ justifyContent: "center" }}>
        <View>
          <Text style={styles.questionTitle}> {props.currentWord} </Text>
        </View>
      </View>
      <TouchableWithoutFeedback onPress={() => playSound("US")}>
        <Voice voiceName="US" iconColor="#BAC130" />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  wordContainer: {
    flexDirection: "row",
    height: "7%",
    justifyContent: "space-around",
  },
  questionTitle: {
    fontSize: width_100 * 7.5,
    color: "blue",
    fontWeight: "bold",
    color: "#34B793",
  },
});

export default BottomIconContainer;
