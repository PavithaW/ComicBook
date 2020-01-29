
import {createAppContainer}  from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Search from '../components/Search'
import Details from '../components/Details'

const AppNavigator = createStackNavigator({
    Search: {
      screen: Search
   },
   Details: {
    screen: Details
 },
});

const AppNav = createAppContainer(AppNavigator);

export default AppNav;