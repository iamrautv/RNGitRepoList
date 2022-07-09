import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const ErrorView = props => {
  const {errorMsg, errorType} = props;

  const getErrorView = () => {
    let cmp = null;
    switch (errorType) {
      case 'small':
        cmp = (
          <View style={styles.smallWrap}>
            <Icon name="error" size={24} color="#333" />
            <Text style={styles.smallTxt}>
              {errorMsg || 'Sorry, Some error occurred!'}
            </Text>
          </View>
        );
        break;
      case 'large':
        cmp = (
          <View style={styles.largeWrap}>
            <Icon name="error" size={50} color="#333" />
            <Text style={styles.largeTxt}>
              {errorMsg || 'Sorry, Some error occurred!'}
            </Text>
          </View>
        );
        break;
      default:
        cmp = (
          <View style={styles.defaultWrap}>
            <Icon name="error" size={32} color="#333" />
            <Text style={styles.defaultTxt}>
              {errorMsg || 'Sorry, Some error occurred!'}
            </Text>
          </View>
        );
        break;
    }
    return cmp;
  };
  return getErrorView();
};

export default ErrorView;
