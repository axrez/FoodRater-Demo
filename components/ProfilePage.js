import React from 'react';
import { Text, View, Button } from 'react-native';

import Profile from './Profile';

const ProfilePage = props => {
  return(
    <View>
      { props.userLoggedIn ? <Profile /> : <LogIn /> }
    </View>
  );
};

export default ProfilePage;
