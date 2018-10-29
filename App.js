'use strict';
import { createStackNavigator } from 'react-navigation';
import SearchPage from './src/SearchPage';
import SearchResults from './src/SearchResults';

const App = createStackNavigator({
  Home: { screen: SearchPage },
  Results: { screen: SearchResults }
});
export default App;