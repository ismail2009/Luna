import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Text,
} from 'react-native';

import {SvgUri} from 'react-native-svg';
import {CircleButton, BasicButton} from '../Button';
import {colors, sizes} from '../../styles/theme.style';
import {svgs} from '../../constants/Svgs';
// import {MainView, playSound} from '../RecordAudio/AudioPlayer';
// import Video from '../Video';
import Row from './Row';
import UserDetail from './UserDetail';
import CardFooter from './CardFooter';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import getIcon from '../RecordAudio/RecordingIcons';
import Player from '../RecordAudio/Player';

/**
 *
 * @param footerType String options ['date', 'reaction', 'none']
 * @param data Object of
 uri : String
 name: String
 prankTitle: String
 avatar: String
 date: String
 isLike: Boolean
 * @param actions Object of
 *     onPressCall: Function triggered when call button pressed
 *     onPressSend: Function triggered when send button pressed
 *     onPressLike: Function triggered when like button pressed
 *     onPressStar: Function triggered when Star button pressed
 * @returns {any}
 * @constructor
 */

const Header = ({children, style}) => (
  <Text style={[styles.header, style]}>{children}</Text>
);
class Card extends Component {
  constructor(props) {
    super(props);
  }
  _renderButton(title, onPress, active) {
    return (
      <CircleButton
        x={50}
        y={50}
        bgColor={colors.WHITE_COLOR}
        onPress={onPress}
        icon={getIcon(title)}
      />
    );
  }
  render() {
    return (
      <View
        style={[styles.cardStyle, styles.shadowStyle]}
        // activeOpacity={0.5}
        // onPress={actions.onPressCard}
      >

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardStyle: {
    width: widthPercentageToDP(90),
    height: 240,
    borderRadius: 5,
    backgroundColor: colors.WHITE_COLOR,
    padding: 10,
  },
  shadowStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.06,
    shadowRadius: 2.22,

    elevation: 3,
  },
  buttonMargin: {marginHorizontal: 4.5},
  scrollContainer: {},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 30,
    padding: 20,
    textAlign: 'center',
    backgroundColor: 'rgba(240,240,240,1)',
  },
});
export default Card;
