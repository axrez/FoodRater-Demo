import React, { useState } from 'react';
import { View } from 'react-native';

import Profile from './Profile';
import LogIn from './LogIn';

const ProfilePage = props => {
  const [userData, useUserData ] = useState(null);

  return(
    <View>
      { userData ? <Profile /> : <LogIn updateUserData={useUserData} /> }
    </View>
  );
};

export default ProfilePage;
