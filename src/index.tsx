import variables from '@/common/styles/variables';
import LangProvider from '@/components/LangProvider';
import PageLoading from '@/components/PageLoading';
import appModel from '@/models';
import dva from '@/utils/dva';
import { Provider } from '@ant-design/react-native';
import React from 'react';
import { Dimensions, YellowBox } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Router, { routerMiddleware, routerReducer } from './router';

// 移除 "Remote debugger is in a background tab" warning
YellowBox.ignoreWarnings(['Remote debugger']);

// style里面的尺寸大小都写与2倍图设计稿一样(以宽度750px为基础)，eg:设计稿为20px,style里面写20rem
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 750, ...variables });

// 定义dva的参数
const options = {
  initialState: {},
  // 注册的models
  models: appModel,
  extraReducers: { router: routerReducer },
  // // 注册的事件
  onAction: [routerMiddleware],
};

const app = dva(options);
const App = app.start(
  <LangProvider>
    <Provider>
      <Router />
      <PageLoading />
    </Provider>
  </LangProvider>
);

export default App;
