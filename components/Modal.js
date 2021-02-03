import React, { useState } from "react";
import { StyleSheet, View, Text, Button, Dimensions } from "react-native";

import Modal from "react-native-modal";

const WrapperComponent = (props) => {
  const deviceWidth = Dimensions.get("window").width;
  const deviceHeight = Dimensions.get("window").height;
  //   const deviceHeight =
  //     Platform.OS === "ios"
  //       ? Dimensions.get("window").height
  //       : require("react-native-extra-dimensions-android").get(
  //           "REAL_WINDOW_HEIGHT"
  //         );

  return (
    // <View style={{ flex: 1 }}>
    <Modal
      isVisible={props.isModalVisible}
      deviceWidth={deviceWidth}
      deviceHeight={deviceHeight}
      onBackdropPress={props.toggleModal}
      onSwipeComplete={props.toggleModal}
      swipeDirection={["up", "down", "left", "right"]}
      swipeThreshold={150}
      // animationIn={"zoomInDown"}
      // animationOut={"zoomOutUp"}
      // animationInTiming={1000}
      // animationOutTiming={1000}
      // backdropTransitionInTiming={1000}
      // backdropTransitionOutTiming={1000}
      // hideModalContentWhileAnimating ={true}
    >
      <View style={styles.modalView}>
        {/* <Text style={{ color: "white" }}>I am the modal content!</Text> */}
        {/* <Button title="Hide modal" onPress={props.toggleModal} /> */}
        <Text style={{color: 'white'}}>A1 503</Text>
      </View>
    </Modal>
    // </View>
  );
};

const styles = StyleSheet.create({
  ModalConatiner: {
    // justifyContent:'center',
    // alignItems:'center',
    // width:'100%'
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default WrapperComponent;
