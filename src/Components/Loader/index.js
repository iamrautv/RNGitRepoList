import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {colors} from '../../config';
import styles from './styles';

const Loader = props => {
  const {color, size} = props;

  return (
    <View style={styles.wrap}>
      <ActivityIndicator
        size={size || 'large'}
        color={color || colors.primary}
      />
    </View>
  );
};

export default Loader;
