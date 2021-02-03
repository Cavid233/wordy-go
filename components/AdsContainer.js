import React from "react";
import { StyleSheet, View } from "react-native";
import {
    AdMobBanner,
  } from 'expo-ads-admob';
const AdsContainer = (props) => {
  return (
    <View style={styles.adsContainer}>
      <AdMobBanner
        bannerSize="leaderboard"
        adUnitID= {__DEV__ ?  "ca-app-pub-3940256099942544/6300978111" : 'ca-app-pub-2030473776703501/4396516171'} // Test ID, Replace with your-admob-unit-id
        // adUnitID="ca-app-pub-2030473776703501/4396516171" // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds = {true} // true or false
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
    adsContainer : {
        width: '100%',
        height: '3%',
        justifyContent:'center',
        alignItems:'center'
    },
});

export default AdsContainer;