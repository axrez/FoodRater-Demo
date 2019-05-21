/**
 * Custom button for displaying buttons in  topbars
 * 
 * @param { String } title The buttons text
 * @param { Object } style The usual native style object
 * @param { function } onPress Function to execute on press
 * @param { String } underlayColor The color of the underlay which shows when the button is pressed
 */
import React from 'react';
import { TouchableHighlight, Text, View } from 'react-native';

const InBarButton = ({ title, style, onPress, underlayColor }) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={underlayColor}
    >
      <View style={style} >
        <Text>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default InBarButton;
