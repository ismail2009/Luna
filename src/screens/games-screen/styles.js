import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row-reverse',
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
    height: 80,
    backgroundColor: '#A80E54',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  iconStyle: {width: 100, height: 80},
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
