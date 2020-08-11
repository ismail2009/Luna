import {StyleSheet} from 'react-native';
import {colors} from '../../shared/styles/theme.style';
import {widthPercentageToDP} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  listStyle: {
    width: '85%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: 30,
  },
  primaryButton: {
    // width: widthPercentageToDP(85) / 3,
    padding: 5,
    height: 137,
    backgroundColor: '#6154A4',
    borderRadius: 25,
    borderWidth: 5,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    marginHorizontal: '2%',
    marginVertical: '2%',
  },
  iconStyle: {width: 100, height: 80},
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
