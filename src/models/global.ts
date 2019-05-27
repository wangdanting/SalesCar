export default {
  namespace: 'global',
  state: {
    loading: false,
    lang: 'en',
  },
  subscriptions: {},
  effects: {},
  reducers: {
    setState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
