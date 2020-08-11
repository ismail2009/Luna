import {StyleSheet} from 'react-native';

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
  primaryButton: {
    height: 80,
    backgroundColor: '#5151E5',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  iconStyle: {width: 50, height: 40},
  scene: {
    flex: 1,
  },
});
