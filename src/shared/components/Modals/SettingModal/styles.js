import {StyleSheet} from 'react-native';
import {fonts} from '../../../styles/theme.style';
import {widthPercentageToDP} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  content: {
    width: 400,
    backgroundColor: '#EFEFEF',
    borderRadius: 15,
    alignItems: 'center',
    padding: '2.5%',
    alignSelf: 'center',
    marginVertical: '4%',
  },
  header: {
    alignSelf: 'center',
    color: '#C1306B',
    marginVertical: 9,
  },
  results: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 30,
    fontSize: 20,
  },
  space: {
    marginVertical: 8,
  },
  socialIcons: {
    width: 32,
    height: 32,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    width: 35,
    height: 35,
    position: 'absolute',
    top: -10,
    left: -10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
