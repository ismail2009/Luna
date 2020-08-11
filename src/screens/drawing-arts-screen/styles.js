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
    width: '90%',
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
    paddingTop: 20,
  },
  primaryButton: {
    width: widthPercentageToDP(80) / 3,
    height: 125,
    backgroundColor: '#6B68C1',
    borderRadius: 25,
    alignItems: 'center',
    marginHorizontal: '2%',
    marginVertical: '2%',
    justifyContent: 'center',
  },
  iconStyle: {width: 100, height: 80},
});
