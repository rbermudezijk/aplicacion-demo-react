'use strict';
import { createStackNavigator } from 'react-navigation';
import SearchPage from './src/SearchPage';
import SearchResults from './src/SearchResults';
import SearchItemDetail from './src/SearchItemDetail';
import MapLocation from './src/MapLocation';

const App = createStackNavigator({
  Home: { screen: SearchPage },
  Results: { screen: SearchResults },
  Details: { screen: SearchItemDetail },
  MapLocation: {screen: MapLocation },
});
export default App;