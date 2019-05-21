/**
 * Håndtere brugerns login
 */

import React, {useState} from 'react';
import { View, Text, ImageBackground, StyleSheet, TextInput, Button, } from 'react-native';

import LogInBG from '../assets/LogInBG.jpg'
import Firebase from '../utils/firebase'

const LogInView = ({ updateUserData }) => {
  const [email, useEmail] = useState("");
  const [password, usePassword] = useState("");
  const [err, useErr] = useState(false);

  const signIn = async e => {
    Firebase.auth().signInWithEmailAndPassword(email, password)
      .then(data => {
        useErr(false)
        return(updateUserData(data))
      })
      .catch(() => useErr(true));
  }

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
          autoCapitalize="none"
          autoCorrect={false}
          />
        <TextInput 
          placeholder="Password" 
          style={styles.TextInput} 
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={text => usePassword(text)}
          />
        {/* <Text style={styles.error} >Error</Text> */}
        <View style={{flexDirection: 'row'}}>
          <View style={{margin: 10}}>
            <Button title="Opret" color="#090063" />
          </View>
          <View style={{margin: 10}}>
            <Button title="Log Ind" color="#820303" onPress={e => signIn(e)} />
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
  },
  error: {
    color: 'red',
    backgroundColor: '#eee',
    padding: 20
  }
})

export default LogInView;
