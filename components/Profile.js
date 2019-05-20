/**
 *  Håndtere 'stamsiden' for brugerns profil
 * 
 */

import React, { useState } from 'react';
import {View, Text, Image, StyleSheet, FlatList, Switch} from 'react-native';

// Indholdet af listen med indstillinger
const menuItems = [{key: 'Ændre brugeroplysninger'}, {key: 'Mine Reviews'}, {key: 'Mine Tilbud'},{key: 'Feedback'}, {key: 'Support'}, ];

const Profile = props => {
  //Lav et state der håndtere swtichen i bunden af siden
  const [newsLetter, useNewsLetter] = useState(true);
  return(
    <View style={styles.wrapper} >
      <View style={styles.TopBar} >
        <Text style={styles.Title} >Profil</Text>
      </View>
      <Image
        style={styles.Image} 
        source={{uri: 'https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/20664936_1273379126121582_8086699384831287014_n.jpg?_nc_cat=102&_nc_ht=scontent-arn2-1.xx&oh=b465f74f03ecb6701e99338dde22c50b&oe=5D6E3CC3'}} />
      <FlatList 
        data={menuItems}
        renderItem={({ item }) => <Text style={styles.ListItem}>{item.key}</Text>}
        contentContainerStyle={styles.ListWrapper}
      />
      <View style={{flexDirection: 'row', marginBottom: 30}} >
        <Text>Modtag nyhedsbrev</Text>
        <Switch value={newsLetter} onValueChange={() => useNewsLetter(!newsLetter)} />
      </View>
    </View>
  )
}

//Styles...
const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  TopBar: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#ddd',
  },
  Title: {
    flex: 1,
    fontSize: 20,
    color: '#000',
    fontWeight: '600',
    margin: 8
  },
  Image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 35,
    marginBottom: 15,
  },
  ListWrapper: {
    alignItems: 'center',
  },
  ListItem: {
    padding: 10,
    margin: 5,
    width: 200,
    textAlign: 'center',
    backgroundColor: '#ddd',
  }
});


export default Profile;
