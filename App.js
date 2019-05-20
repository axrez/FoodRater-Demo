import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeView from './views/HomeView';
import ProfileView from './views/ProfileView';

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeView,
  },
  Profile: ProfileView
}


);

export default App = createAppContainer(TabNavigator);
