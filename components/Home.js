import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = ({ navigate }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home</Text>
      <Button title="Profile" onPress={() => navigate('Profile')} />
    </View>
  );
}

export default Home;
