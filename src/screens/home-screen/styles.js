import {StyleSheet} from 'react-native';
import {colors} from '../../shared/styles/theme.style';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: 220,
    marginBottom: 20,
    marginTop: 50,
  },
  primaryButton: {
    alignItems: 'center',
    marginHorizontal: '1.5%',
    height: '100%',
    justifyContent: 'center',
  },
  roundedButton: {
    width: 90,
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: colors.SECONDARY_COLOR,
    borderRadius: 25,
    alignItems: 'center',
  },
  imageWrapper: {width: '100%', height: '100%'},
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
