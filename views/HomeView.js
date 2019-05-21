import React from 'react';

import Ionicon from 'react-native-vector-icons/Ionicons';

import Home from '../components/Home'

class HomeView extends React.Component {
  static navigationOptions ={
    tabBarLabel: 'Home',
    tabBarIcon: () => (<Ionicon name={'md-home'} size={26} />)
  }
  render() {
    const { navigate } = this.props.navigation
    return (<Home navigate={navigate} />);
  }
}

export default HomeView;
