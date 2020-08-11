import {StyleSheet} from 'react-native';
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
    width: 450,
    backgroundColor: '#EFEFEF',
    borderRadius: 15,
    alignItems: 'center',
    paddingHorizontal: '2.5%',
    paddingVertical: '1.5%',
    marginVertical: '4%',
    alignSelf: 'center',
  },
  header: {
    alignSelf: 'center',
    color: '#C1306B',
    marginVertical: 9,
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
