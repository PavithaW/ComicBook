
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from '../../node_modules/react-navigation-stack';
//import { createStackNavigator } from '../../node_modules';

import Search from '../components/Search'
import Details from '../components/Details'

const AppNavigator = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Search',
          }
    },
    Details: {
        screen: Details,
        navigationOptions: {
            title: 'Details',
            headerBackTitle: 'Back',
          }
    },
});

const AppNav = createAppContainer(AppNavigator);

export default AppNav;