import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

const SupporterContainer = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} />
      </View>
      <View style={styles.blockConatiner}>
        <View style={styles.firstBlock}>
            
        </View>
        <View style={styles.secondBlock}>

        </View>
        <View style={styles.thirdBlock}>

        </View>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        alignItems:'center',
        height: '10%'
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 20,
        width:"50%",
        height: '80%',
        marginTop: 10,
        textAlign: 'center'
    },
    blockConatiner: {
        flexDirection: 'row',
        height: '60%',

    },
    firstBlock: {
        borderRightWidth:1,
        // height: '80%',
        width:'30%',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
    },
    secondBlock: {
        // borderRightWidth:1,
        // borderTopLeftRadius: 30,
        // height: '80%',
        width:'40%',
        // borderTopRightRadius: 30,
        // borderBottomRightRadius: 30,
    },
    thirdBlock: {
        // borderRightWidth:1,
        borderLeftWidth: 1,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        // height: '80%',
        width:'30%',
        // borderTopRightRadius: 30,
        // borderBottomRightRadius: 30,
    }
});

export default SupporterContainer;
