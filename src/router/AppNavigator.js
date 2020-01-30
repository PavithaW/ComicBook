
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from '../../node_modules/react-navigation-stack';

import Search from '../components/Search'
import Details from '../components/Details'

const AppNavigator = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Search',
            headerTintColor:'#000000',
            headerStyle: {
                backgroundColor: '#f0edeb'
              },
          }
    },
    Details: {
        screen: Details,
        navigationOptions: {
            title: 'Details',
            headerBackTitle: 'Back',
            headerTintColor:'#000000',
            headerStyle: {
                backgroundColor: '#f0edeb'
              },
          }
    },
});

const AppNav = createAppContainer(AppNavigator);

export default AppNav;