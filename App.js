import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import HomeView from './views/HomeView';
import ProfileView from './views/ProfileView';
import MapView from './views/MapView';

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeView,
  },
  Map: MapView,
  Profile: ProfileView,
}


);

export default App = createAppContainer(TabNavigator);
