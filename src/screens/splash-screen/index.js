import React, {useState} from 'react';
import {ImageBackground, Text, View} from 'react-native';
// import * as Progress from 'react-native-progress';
import ProgressBar from '../../shared/components/ProgressBar';
import styles from '../home-screen/styles';
import {fonts} from '../../shared/styles/theme.style';
import {headers} from '../../shared/styles';
import useInterval from '../../shared/hooks/useInterval';
const SplashScreen = () => {
  const [progress, setProgress] = useState(0);
  useInterval(() => {
    if (progress < 100) {
      setProgress(progress + 5);
    }
  }, 4000);
  return (
    <ImageBackground
      source={require('../../assets/images/splash/splash.png')}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{alignItems: 'center'}}>
        <ProgressBar
          progress={progress}
          width={300}
          height={35}
          borderRadius={300 / 2}
          indeterminateAnimationDuration={1000}
        />
        <Text style={[headers.secondary, {color: '#C1306B'}]}>
          جاري التحميل ...
        </Text>
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;
