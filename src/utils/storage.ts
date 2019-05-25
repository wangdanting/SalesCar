import AsyncStorage from '@react-native-community/async-storage';

const set = (key: any, value: any, callBack?: () => void) => {
  try {
    AsyncStorage.setItem(key, JSON.stringify(value), callBack);
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.log(error, 'error');
  }
};

const get = (key: any, defaultValue = null) => {
  try {
    return AsyncStorage.getItem(key).then(value =>
      value !== null ? JSON.parse(value) : defaultValue
    );
  } catch (error) {
    return '';
  }
};

const remove = (key: any, callBack?: () => void) => {
  try {
    AsyncStorage.removeItem(key, callBack);
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.log(error, 'error');
  }
};

const clear = (callBack?: () => void) => {
  try {
    AsyncStorage.clear(callBack);
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.log(error, 'error');
  }
};

const getAllKeys = (callBack?: () => void) => {
  try {
    AsyncStorage.getAllKeys(callBack);
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.log(error, 'error');
  }
};

export default {
  set,
  get,
  remove,
  clear,
  getAllKeys,
};
