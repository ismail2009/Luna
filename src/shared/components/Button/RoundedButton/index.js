import React from 'react';
import {View, TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import styles from './styles';
import {colors} from '../../../styles/theme.style';
import {SoundButton} from '../index';

/**
 *
 * @param classes
 * @param onPress
 * @param children
 * @param icon
 * @param gray
 * @param withOutShadow
 * @param custom
 * @param isActivity
 * @returns {JSX.Element}
 * @constructor
 */
const RoundedButton = ({
  classes,
  onPress,
  children,
  icon,
  gray,
  withOutShadow,
  custom,
  isActivity,
}) => {
  return (
    <SoundButton
      style={[
        styles.SubmitButtonStyle,
        !withOutShadow && styles.buttonShadow,
        classes?.button,
        !custom && {
          backgroundColor: gray ? colors.GRAY_LIGHT : colors.LIGHT_RED_COLOR,
        },
      ]}
      activeOpacity={0.5}
      onPress={onPress}>
      {isActivity && (
        <ActivityIndicator
          size={'small'}
          animating={isActivity}
          color={colors.BLACK_COLOR}
          style={{marginRight: 10}}
        />
      )}
      <Text
        style={[
          classes?.buttonText,
          styles.TextStyle,
          !custom && {
            color: colors.WHITE_COLOR,
          },
        ]}>
        {children}
      </Text>
      {icon}
    </SoundButton>
  );
};

export default RoundedButton;
