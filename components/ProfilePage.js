import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

import Profile from './Profile';
import LogIn from './LogIn';

const ProfilePage = props => {
  const [userData, useUserData ] = useState(null);
  console.log(userData);
  return(
    <View>
      { userData ? <Profile /> : <LogIn updateUserData={useUserData} /> }
    </View>
  );
};

export default ProfilePage;
