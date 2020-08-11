import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import SoundPlayer from '../../utils/SoundPlayer';
import storage from '../../utils/storage';

/**
 * @class SoundButton
 * @desc A button with a specific sound effect
 * @param onPress {function} an event triggered when user click button
 */
export default class SoundButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSoundEnable: false,
    };
    this.soundPlayer = new SoundPlayer();
  }
  async componentWillMount() {
    const sound = await storage.getItem('@user/setting/sound');
    this.setState({isSoundEnable: sound});
  }

  playSound = () => {
    const config = {
      url: require('../../../../Enter_Clicks.wav'),
      isRequired: true,
    };
    this.soundPlayer.playSound(config.url, config);
  };
  render() {
    const {onPress, children, ...props} = this.props;
    // console.log(this.state.isSoundEnable, 'isSoundEnable');
    return (
      <TouchableOpacity
        {...props}
        onPress={() => {
          this.state.isSoundEnable && this.playSound();
          onPress();
        }}>
        {children}
      </TouchableOpacity>
    );
  }
}
