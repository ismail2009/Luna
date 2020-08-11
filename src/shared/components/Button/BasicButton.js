import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors, fonts, sizes} from '../../styles/theme.style';
import {SoundButton} from './index';

/**
 * @name BasicButton button used for linking button without border
 * @param {Object} classes
 * @param {Object} classes.buttonStyle
 * @param {Object}  classes.buttonTextStyle
 * @param {function} onPress - trigger event on press
 * @param {component} children
 * @param {boolean} black
 * @param {boolean} underline
 * @param {string} textSize - e.g (sm, md, lg, default (xxl))
 * @returns {component}
 * @constructor
 */
const BasicButton = ({
  classes,
  onPress,
  children,
  grey,
  underline,
  textSize,
}) => {
  return (
    <SoundButton
      style={[classes?.buttonStyle]}
      activeOpacity={0.5}
      onPress={onPress}>
      <Text
        style={[
          styles.textStyle,
          {
            color: grey ? colors.GRAY_LIGHT : colors.LIGHT_RED_COLOR,
            fontSize: getTextSize(textSize),
          },
          underline && styles.underline,
          classes?.buttonTextStyle,
        ]}>
        {children}
      </Text>
    </SoundButton>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    color: colors.BLACK_COLOR,
    fontFamily: fonts.FONT_WEIGHT_REGULAR,
  },
  underline: {
    textDecorationLine: 'underline',
  },
});
export default BasicButton;

function getTextSize(key) {
  if (key === 'sm') {
    return sizes.FONT_SIZE_SMALL;
  } else if (key === 'md') {
    return sizes.FONT_SIZE_MEDIUM;
  } else if (key === 'lg') {
    return sizes.FONT_SIZE_LARGE;
  } else {
    return sizes.FONT_SIZE_EXTRA_LARGE;
  }
}
