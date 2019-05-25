import appModel from '@/models';
import dva from '@/utils/dva';
import React from 'react';
import Router, { routerMiddleware, routerReducer } from './router';

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
const App = app.start(<Router />);

export default App;
