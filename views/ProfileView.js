import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';

import Profile from '../components/Profile'

class ProfileView extends React.Component {
  static navigationOptions ={
    tabBarLabel: 'Profile',
    tabBarIcon: () => (<Ionicon name={'md-person'} size={26} />)
  }
  render() {
    return (<Profile />);
  }
}

export default ProfileView;
