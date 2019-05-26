import { Flex } from '@ant-design/react-native';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import styles from './style';

const PageLoading = ({ loading }) => {
  return loading ? (
    <Flex style={styles.container} justify="center" align="center">
      <ActivityIndicator size="large" color="#121212" />
    </Flex>
  ) : null;
};

const mapStateToProps = ({ global }) => ({
  loading: global.loading,
});

export default connect(mapStateToProps)(PageLoading);
