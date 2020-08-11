import {StyleSheet} from 'react-native';
import {width, colors, sizes, fonts} from '../../shared/styles/theme.style';
const imageBackgroundStyles = {
  flex: 1,
  resizeMode: 'contain',
  justifyContent: 'center',
};

const sharedStyles = StyleSheet.create({
  imageBackgroundStyles,
});

const circle = ({x, y, color, bgColor}) => {
  return {
    width: x,
    height: y,
    borderRadius: x / 2,
    textAlign: 'center',
    backgroundColor: bgColor,
    color: colors.color,
  };
};
const headers = StyleSheet.create({
  primary: {
    fontFamily: fonts.FONT_WEIGHT_REGULAR,
    fontSize: 18,
  },

  secondary: {
    fontFamily: fonts.HACEN_DIGITAL_ARABIA_XL,
    fontSize: 24,
  },
  primaryMedium: {
    fontFamily: fonts.FONT_WEIGHT_REGULAR,
    fontSize: 18,
  },
  paragraph: {
    fontFamily: fonts.FONT_WEIGHT_REGULAR,
    fontSize: 12,
  },
});

export {headers, sharedStyles, circle};
