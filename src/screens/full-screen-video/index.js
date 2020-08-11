import React from 'react';
import {View} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import getIUri from '../../shared/utils/getIUri';

const FullScreenVideo = props => {
  props.navigation.setOptions({statusBarHidden: true});
  const uri = getIUri(props.route.params.uri);
  console.log(uri);
  return (
    <View style={{flex: 1}}>
      <VideoPlayer source={{uri}} navigator={props.navigation} />
    </View>
  );
};
export default FullScreenVideo;
