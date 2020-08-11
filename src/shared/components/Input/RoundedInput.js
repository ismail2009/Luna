import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';

const RoundedButton = ({style, width = '100%', ...rest}) => (
  <TextInput style={[styles.inputStyle, {width}, style]} {...rest} />
);
export default RoundedButton;
