import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';

import Map from '../components/Map'

class MapView extends React.Component {
  static navigationOptions ={
    tabBarLabel: 'Map',
    tabBarIcon: () => (<Ionicon name={'md-map'} size={26} />)
  }
  render() {
    return (<Map />);
  }
}

export default MapView;