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
    width: 300,
    height: 200,
    backgroundColor: '#EFEFEF',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2.5%',
    alignSelf: 'center',
  },
  results: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 30,
    fontSize: 20,
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
