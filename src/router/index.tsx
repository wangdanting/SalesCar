import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import {
  createNavigationReducer,
  createReactNavigationReduxMiddleware,
  createReduxContainer,
} from 'react-navigation-redux-helpers';

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

export const routerReducer = createNavigationReducer(AppNavigation);

export const routerMiddleware = createReactNavigationReduxMiddleware((state: any) => state.router);

const App = createReduxContainer(AppNavigation);

class Router extends PureComponent<any> {
  render() {
    const { dispatch, router } = this.props;
    return <App dispatch={dispatch} state={router} />;
  }
}

const mapStateToProps = state => ({
  router: state.router,
});

export default connect(mapStateToProps)(Router);
