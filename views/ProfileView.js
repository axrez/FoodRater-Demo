import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';

import ProfilePage from '../components/ProfilePage';

class ProfileView extends React.Component {
  static navigationOptions ={
    tabBarLabel: 'Profile',
    tabBarIcon: () => (<Ionicon name={'md-person'} size={26} />),
  }
  render() {
    return <ProfilePage />;
  }
}


export default ProfileView;
