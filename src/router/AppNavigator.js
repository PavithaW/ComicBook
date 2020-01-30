
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from '../../node_modules/react-navigation-stack';

import Search from '../components/Search'
import BookDetails from '../components/BookDetails'

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
    BookDetails: {
        screen: BookDetails,
        navigationOptions: {
            title: 'Book Details',
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