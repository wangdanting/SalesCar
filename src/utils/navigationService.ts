// we define NavigationService which is a simple module with functions that dispatch user-defined navigation actions.
// https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html

import { NavigationActions } from 'react-navigation';

let navigator;

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

function navigate(routeName: string, params?: any) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

export default {
  navigate,
  setTopLevelNavigator,
};
