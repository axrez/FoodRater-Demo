/**
 * Håndtere brugerns login
 */

import React, {useState} from 'react';
import { View, Text, ImageBackground, StyleSheet, TextInput, Button, } from 'react-native';

import LogInBG from '../assets/LogInBG.jpg'

const LogIn = props => {
  const [email, useEmail] = useState("");
  const [password, usePassword] = useState("");

  return(
    <ImageBackground
      source={LogInBG}
      style={styles.BG}
    >
        <Text style={styles.Title} >FoodRater</Text>
        <TextInput 
          placeholder="Email" 
          style={styles.TextInput} 
          onChangeText={text => useEmail(text)}
          />
        <TextInput 
          placeholder="Password" 
          style={styles.TextInput} 
          secureTextEntry
          onChangeText={text => usePassword(text)}
          />
        <Text>{`${email} og ${password}`}</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{margin: 10}}>
            <Button title="Opret" color="#090063" />
          </View>
          <View style={{margin: 10}}>
            <Button title="Log Ind" color="#820303" />
          </View>
        </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  BG: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Title: {
    fontSize: 40,
    color: '#fff',
  },
  TextInput: {
    backgroundColor: '#fff',
    margin: 10,
    width: '50%',
  }
})

export default LogIn;
