import React, { useCallback, useEffect, useState } from "react";

import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import AdsContainer from "../components/AdsContainer";
import QuestionVariant from "../components/QuestionVariant";

import SupporterContainer from "../components/SupporterContainer";

import InformationConatiner from "../components/InformationContainer";

import DictWord from "../models/DictWord";
import BottomIconContainer from "../components/BottomIconContainer";

import Id_combo_Container from "../components/Id_comboContainer";
import TitleContainer from "../components/TitleContainer";

let width_100 = Math.round(Dimensions.get("window").width / 100); // 4 cixi j7-de
let arrayShuffle = require("array-shuffle");

let ButtonList = [
  new DictWord(1, "Doctor", "Hekim", null, null),
  new DictWord(2, "Nice", "Gozel", null, null),
  new DictWord(3, "Book", "Kitab", null, null),
  new DictWord(4, "Star", "Ulduz", null, null),
  new DictWord(5, "Sun", "Gunes", null, null),
  new DictWord(6, "Phone", "Telefon", null, null),
  new DictWord(7, "Pen", "Qelem", null, null),
  new DictWord(8, "Table", "Stol", null, null),
  new DictWord(9, "Dog", "It", null, null),
];

let totalTwoFalse = 0;

const TestScreen = (props) => {
  const [idTest, setIdTest] = useState(0);
  const [comboTest, setComboTest] = useState(0);
  // const [totalTwo, setTotalTwo] = useState(0);

  // const [currentWord, setCurrentWord] = useState(ButtonList[idTest]["title"]);
  const [currentWord, setCurrentWord] = useState("Doctor");

  const restartHandler = (wrong) => {
    if (wrong === 'false') {
      totalTwoFalse++;
      if (totalTwoFalse === 2) {
        setComboTest(0);
        totalTwoFalse = 0;
      }
    }else {
      if (comboTest !== 0) {
        setComboTest(prev => prev - 1)
      }
    }
    setFourButtons(() => answerButtonsViewHandler(idTest));

  };
  const nextTestHandler = useCallback((correct) => {
    // console.log(correct === 'correct');
    if(correct === 'correct'){
      setComboTest(prev => prev + 1);
    }
    setIdTest((prev) => prev + 1);
  }, [idTest]);

  useEffect(() => {
    setCurrentWord(ButtonList[idTest]["title"]);
    setFourButtons(answerButtonsViewHandler(idTest));
  }, [nextTestHandler, previousTestHandler]);

  const previousTestHandler = useCallback(() => {
    setIdTest((prev) => prev - 1);
  },[idTest]);

  // const correctTestHandler = () =>{

  // }

  const answerButtonsViewHandler = (id) => {
    let element;
    let liste2 = new Array();
    let liste3 = new Array();

    let currentWordAnswer = ButtonList[id]["answer"];

    while (liste2.length !== 3) {
      element =
        ButtonList[Math.floor(Math.random() * (ButtonList.length - 1))][
          "answer"
        ];
      if (!liste2.includes(element) && element !== currentWordAnswer) {
        liste2.push(element);
      }
    }
    liste2.push(currentWordAnswer);
    liste2.map((value, key) => {
      // console.log(value == currentWordAnswer);
      // console.log(currentWordAnswer);
      liste3.push(
        <QuestionVariant
          title={value}
          key={key}
          resultHandler={ 
            value == currentWordAnswer ?  nextTestHandler.bind(this,'correct') : restartHandler.bind(this,'false')
          }
        />
      );
    });
    liste3 = arrayShuffle(liste3);
    // liste2 = arrayShuffle(liste2);
    return liste3;
  };
  


  const [fourButtons, setFourButtons] = useState(() =>
    answerButtonsViewHandler(idTest)
  );

  return (
    <View style={styles.screen}>
      <SupporterContainer star />
      <InformationConatiner />

      <View style={styles.questionContainer}>
        <View style={styles.id_combo_Container}>
          <Id_combo_Container idNumber={idTest + 1} />
          <Id_combo_Container idNumber={comboTest} textColor='red' />
        </View>

        <TitleContainer currentWord={currentWord} word={currentWord} />

        <View style={styles.questionButtonsContainer}>{fourButtons}</View>
        {/* <View style={styles.questionButtonsContainer}>
        <QuestionVariant title={fourButtons[0]} resultHandler={fourButtons[0] == currentWordAnswer ? nextTestHandler : restartHandler}  />
        <QuestionVariant title={fourButtons[1]} resultHandler={fourButtons[1] == currentWordAnswer ? nextTestHandler : restartHandler} />
        <QuestionVariant title={fourButtons[2]} resultHandler={fourButtons[2] == currentWordAnswer ? nextTestHandler : restartHandler} />
        <QuestionVariant title={fourButtons[3]} resultHandler={fourButtons[3] == currentWordAnswer ? nextTestHandler : restartHandler} />

        </View> */}

        <View style={styles.punctuationConatiner}>
          <View style={styles.handlepunctuationConatiner}>
            <BottomIconContainer previousTestHandler={previousTestHandler}>
              <AntDesign
                name="leftcircle"
                size={width_100 * 6}
                color="#7FB8BE"
              />
            </BottomIconContainer>
            <BottomIconContainer center>
              <FontAwesome5
                name="lightbulb"
                size={width_100 * 6}
                color="#BAC130"
              />
            </BottomIconContainer>
            <BottomIconContainer nextTestHandler={nextTestHandler}>
              <AntDesign
                name="rightcircle"
                size={width_100 * 6}
                color="#7FB8BE"
              />
            </BottomIconContainer>
            <BottomIconContainer>
              <AntDesign
                name="exclamationcircleo"
                size={width_100 * 6}
                color="red"
              />
            </BottomIconContainer>
            <BottomIconContainer center restartHandler={restartHandler}>
              <MaterialCommunityIcons
                name="restart"
                size={width_100 * 6}
                color="green"
              />
            </BottomIconContainer>
            <BottomIconContainer>
              <AntDesign
                name="questioncircleo"
                size={width_100 * 6}
                color="#9A5AB0"
              />
            </BottomIconContainer>
          </View>
        </View>
      </View>
    </View>
  );
};

TestScreen.navigationOptions = (navData) => {
  return {
    // headerTitle: "Your Cart",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          // iconName={'leaf'}
          onPress={() => {
            console.log(navData.navigation.toggleDrawer());
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          plus
          title="plus"
          // iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
          iconName={"plus"}
          onPress={() => {
            navData.navigation.navigate("CreateOverview");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  questionContainer: {
    height: "80%",
    backgroundColor: "rgba(238, 238, 238, 0.7)",
    borderWidth: 1,
    borderColor: "rgb(172, 172, 172)",
    borderRadius: width_100 * 2.5,
    borderTopLeftRadius: width_100 * 8.75,
    borderTopRightRadius: width_100 * 8.75,
    marginHorizontal: "3%",
    justifyContent: "center",
  },
  punctuationInformationPart: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    borderRadius: width_100 * 5,
    width: "33%",
  },

  id_combo_Container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "8%",
  },

  punctuationConatiner: {
    height: "25%",
    // justifyContent:'center' // New C
  },
  handlepunctuationConatiner: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    // alignItems:'center',
    flexWrap: "wrap",
    height: "80%",
  },

  questionButtonsContainer: {
    padding: width_100 * 2.5,
    height: "65%",
    flexShrink: 1,
    borderTopWidth: 0.1,
    borderRadius: width_100 * 5,
  },

  title: {
    fontSize: width_100 * 6.25,
  },
});

export default TestScreen;
