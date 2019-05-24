// 配置dva
// 首先使用dva-core提供的create方法创建一个dva app，通过传入的配置参数向app注册所需的model,
// 然后调用app.start()初始化app,接下来关键一步重写start方法返回一个使用Provider包裹的组件并传入app._store，
// 这是向组件注入数据的关键。

import React from 'react';
import { create } from 'dva-core';
import { Provider, connect } from 'react-redux';

export { connect };

export default function(options) {
  const app = create(options);
  // HMR workaround
  if (!global.registered) options.models.forEach(model => app.model(model));
  global.registered = true;

  app.start();
  // eslint-disable-next-line no-underscore-dangle
  const store = app._store;

  app.start = container => () => <Provider store={store}>{container}</Provider>;
  app.getStore = () => store;

  return app;
}
