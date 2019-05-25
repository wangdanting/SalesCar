import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import AuthLoadingScreen from '@/pages/AuthLoading';
import Login from '@/pages/Login';
import Manage from '@/pages/Manage';
import Order from '@/pages/Order';
import PersonalCenter from '@/pages/PersonalCenter';

const AuthStack = createStackNavigator(
  { Login },
  {
    headerMode: 'none',
  }
);

const OrderStack = createStackNavigator({
  Order,
});

const ManageStack = createStackNavigator({
  Manage,
});

const UserStack = createStackNavigator({
  PersonalCenter,
});

const AppStack = createBottomTabNavigator({
  Order: OrderStack,
  Manage: ManageStack,
  User: UserStack,
});

const AppNavigation = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

const AppContainer = createAppContainer(AppNavigation);

export default AppContainer;
