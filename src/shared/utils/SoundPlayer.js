import Sound from 'react-native-sound';
import {Alert} from 'react-native';
/**
 * @author ismail
 * @class SoundPlayer
 * @classdesc a class provide control to sound library like play, pause, stop sound
 *
 */

class SoundPlayer {
  constructor(props) {
    console.log('SoundPlayer constructor');
  }

  /**
   * @function stop sound instance from playing
   */
  stopSound() {
    console.log('SoundPlayer.stopSound');
    this.whoosh.stop();
    this.whoosh.release();
  }
  /**
   * @function handle error while playing sound
   */
  callback = (error, isReset) => {
    console.log(error);
    if (error) {
      console.log('failed to load the sound', error);
      Alert.alert('هناك مشكلة بتشغيل الملف الصوتي', error.message);
      return;
    }
    // loaded successfully
    console.log(
      'duration in seconds: ' +
        this.whoosh.getDuration() +
        'number of channels: ' +
        this.whoosh.getNumberOfChannels(),
    );
    console.log(this, 'me');
    this.whoosh.play(success => {
      if (success) {
        console.log('successfully finished playing');
        isReset ? this.whoosh.reset() : this.whoosh.release();
      } else {
        console.log('playback failed due to audio decoding errors');
        Alert.alert('هناك مشكلة بتشغيل الملف الصوتي');
      }
    });
  };
  /**
   * @function init sound instance and play sound
   */
  playSound(url, config) {
    console.log(url, 'SoundPlayer.playSound');
    let me = this;
    if (!config?.isRequired) {
      me.whoosh = new Sound(url, '', this.callback);
      me.whoosh.setCategory('Playback', true); // true = mixWithOthers
    } else {
      const isReset = true;
      me.whoosh = new Sound(url, error => this.callback(error, isReset));
      me.whoosh.setCategory('Ambient', true); // true = mixWithOthers
    }
  }
}
export default SoundPlayer;
