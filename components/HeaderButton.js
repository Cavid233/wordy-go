import React from "react";
import { Platform } from 'react-native'
import { HeaderButton } from "react-navigation-header-buttons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton  
      {...props}
      // IconComponent={MaterialCommunityIcons} 
      IconComponent={props.plus ? AntDesign : Ionicons} 
      iconSize={22} 
      color={Platform.OS === 'android' ? 'white' : 'pink'}
      // color='green'
    />
  );
};

export default CustomHeaderButton;