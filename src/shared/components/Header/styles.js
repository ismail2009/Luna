import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  leftNavigatorView: {
    width: 60,
    height: 40,
    marginTop: 20,
    borderTopRightRadius: 80 / 2,
    borderBottomRightRadius: 80 / 2,
    paddingHorizontal: 5,
  },
  rightNavigatorView: {
    width: '35%',
    height: 70,
  },
  shape: {
    width: '50%',
    height: '25%',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  shapeTopRight: {
    width: '20%',
    height: '100%',
    borderBottomLeftRadius: 40 / 2,
  },
  shapeTopLeft: {
    width: '25%',
    height: '100%',
    borderBottomRightRadius: 40 / 2,
  },
  navigatorContainer: {
    width: '100%',
    height: '55%',
    borderTopLeftRadius: 100 / 2,
    borderBottomLeftRadius: 100 / 2,
    paddingLeft: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: '10%',
  },
  titleView: {
    height: 100,
  },
  titleContainer: {
    width: '60%',
    // height: 40,
    marginTop: -1,
    borderTopLeftRadius: 100 / 2,
    borderBottomLeftRadius: 100 / 2,
    borderTopRightRadius: 100 / 2,
    borderBottomRightRadius: 100 / 2,
    paddingHorizontal: 15,
    alignItems: 'center',
    alignSelf: 'center',
  },
  titleViewContainer: {
    width: '50%',
    height: 35,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  titleSubView: {width: '43%', height: '100%'},
  shapeSub: {
    width: '43%',
    height: '100%',
  },
  navigatorSubView: {
    width: 75,
    height: '70%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 25,
    paddingRight: 10,
  },
  coinBubble: {
    width: 35,
    height: 35,
    position: 'absolute',
    top: -4,
    left: 0,
  },
  userBubble: {
    width: '60%',
    height: '70%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 25,
    paddingRight: 10,
  },
  userSvgContainer: {
    width: 35,
    height: 35,
    position: 'absolute',
    top: -4,
    left: 0,
  },
});
