import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl-native';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

interface IProps {
  test: string;
}

class Login extends Component<IProps> {
  render() {
    const { test } = this.props;
    return (
      <View>
        <Text>Login{test}</Text>
        <FormattedMessage id="login.nav" />
      </View>
    );
  }
}

const mapStateToProps = ({ login }) => ({
  test: login.test,
});

export default connect(mapStateToProps)(Login);
