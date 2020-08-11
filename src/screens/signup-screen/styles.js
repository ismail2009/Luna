import {StyleSheet} from 'react-native';
import {fonts} from '../../shared/styles/theme.style';
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
    width: '90%',
    borderRadius: 15,
    // alignItems: 'center',
    alignSelf: 'center',
    padding: '2.5%',
    marginBottom: 30,
  },
  row: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    // marginTop: 11,
    height: 70,
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

  socialIcons: {
    width: 32,
    height: 32,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
