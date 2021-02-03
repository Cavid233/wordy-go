import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
 
import SupporterContainer from '../components/SupporterContainer';

const DictScreen = (props) => {
  return (
    <View style={styles.container}>
        <SupporterContainer />
        <View style={styles.wordBox}>
            <Text>1) Table</Text>
        </View>
        <View style={styles.wordBox}>
            <Text>1) Table</Text>
        </View>
        <View style={styles.wordBox}>
            <Text>1) Table</Text>
        </View>
    </View>
  );
};


//  1) UK ve US sozu
//  2) Favorite eklemek
//  3) Definition
//  4) Menasi    
//  5) id-si
//  6) 

DictScreen.navigationOptions = (navData) => {
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
              // console.log('hello');
              // navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
     
    };
  };
const styles = StyleSheet.create({
    container:{
        flex: 1,
        // justifyContent:'center',
        alignItems:'center'
    },
    wordBox: {
        borderWidth:1,
        height:'10%',
        width: '90%'        ,
        // borderRadius: width_100 + 1,
        marginTop: 10,
        borderRadius: 5,

        borderBottomRightRadius: 30,
        // borderBottomRightRadius: width_100 * 5,
        borderTopLeftRadius: 20,
        // justifyContent:'center',
        justifyContent:'space-around',
        // alignItems:'center'
        backgroundColor:'#C0A6F1'
    }
});

export default DictScreen;
