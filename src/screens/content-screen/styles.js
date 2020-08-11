import {StyleSheet} from 'react-native';
import {colors} from '../../shared/styles/theme.style';
import {widthPercentageToDP} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row-reverse',
  },
  listContainer: {
    flex: 1,
    marginTop: 50,
    alignSelf: 'center',
    alignItems: 'center',
  },
  listStyle: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: 30,
  },
  primaryButton: {
    height: 80,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  iconStyle: {width: 50, height: 40},
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  list: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    paddingTop: 50,
    alignItems: 'center',
  },
});
