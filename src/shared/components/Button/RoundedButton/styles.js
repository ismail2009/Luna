import {StyleSheet} from 'react-native';
import {fonts} from '../../../styles/theme.style';

export default StyleSheet.create({
  SubmitButtonStyle: {
    marginVertical: 10,
    paddingVertical: 16,
    backgroundColor: '#00BCD4',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonShadow: {
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 1, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
  },
  TextStyle: {
    textAlign: 'center',
    fontFamily: fonts.FONT_WEIGHT_REGULAR,
    fontSize: 18,
  },
});
