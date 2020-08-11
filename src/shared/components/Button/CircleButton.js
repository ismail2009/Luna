import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {SoundButton} from './index';

/**
 *
 * @param {number} x - width of circle
 * @param {number} y - height of the circle
 * @param {string} color - text color
 * @param {string} bgColor - background color for the button
 * @param {component} icon - any icon component
 * @param {function} onPress -  event triggered when user click the button
 * @param {boolean} transparent - property to add transparency to button
 * @param {Object} buttonStyle - extra style for the button
 * @param {Object} rest - extra property
 * @returns {component}
 * @constructor
 */
const CircleButton = ({
  x,
  y,
  color,
  bgColor,
  icon,
  transparent,
  buttonStyle,
  type,
  ...rest
}) => {
  return type === 'View' ? (
    <View
      style={[
        {
          width: x,
          height: y,
          color,
        },
        !transparent && {borderRadius: x ? x / 2 : 0, backgroundColor: bgColor},
        styles.centerItems,
        // !transparent && styles.shadowStyle,
        buttonStyle,
      ]}
      activeOpacity={0.5}
      {...rest}>
      {icon}
    </View>
  ) : (
    <SoundButton
      style={[
        {
          width: x,
          height: y,
          color,
        },
        !transparent && {borderRadius: x ? x / 2 : 0, backgroundColor: bgColor},
        styles.centerItems,
        // !transparent && styles.shadowStyle,
        buttonStyle,
      ]}
      activeOpacity={0.5}
      {...rest}>
      {icon}
    </SoundButton>
  );
};

const styles = StyleSheet.create({
  shadowStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  centerItems: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CircleButton;
