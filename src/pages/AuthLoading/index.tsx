import config from '@/config';
import { Storage } from '@/utils';
import React, { PureComponent } from 'react';
import { ActivityIndicator, SafeAreaView, StatusBar } from 'react-native';

const { authKey } = config;

interface IProps {
  navigation: any;
}

class AuthLoading extends PureComponent<IProps> {
  componentDidMount() {
    this.checkToken();
  }

  /**
   * 检查Token，判断是否已登录
   */
  checkToken = async () => {
    const { navigation } = this.props;
    const userToken = await Storage.get(authKey);
    navigation.navigate(userToken ? 'App' : 'Auth');
  };

  render() {
    return (
      <SafeAreaView>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </SafeAreaView>
    );
  }
}

export default AuthLoading;
