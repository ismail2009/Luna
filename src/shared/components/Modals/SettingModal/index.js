import React, {useState, useEffect} from 'react';
import {ImageBackground, View, Text} from 'react-native';
import Overlay from '../../ModalOverlay';

import CloseSvg from '../../../../assets/images/SVG/close.svg';
import {headers} from '../../../styles';
import {Switch} from 'react-native-switch';

import styles from './styles';
import {fonts} from '../../../styles/theme.style';
import Row from '../../Row';
import {RoundedButton, SoundButton} from '../../Button';
import LogoutSvg from '../../../../assets/images/SVG/logout.svg';
import storage from '../../../utils/storage';

/**
 * @desc App setting to control sound and songs and access about luna popup
 * @param modalVisible
 * @param closeModal
 * @param openModal
 * @param actions
 * @returns {*}
 * @constructor
 */
const SettingModal = ({modalVisible, closeModal, openModal, actions}) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [isSecondEnabled, setIsSecondEnabled] = useState(true);
  useEffect(() => {
    async function init() {
      const sound = await storage.getItem('@user/setting/sound');
      const voice = await storage.getItem('@user/setting/voice');
      setIsEnabled(sound);
      setIsSecondEnabled(voice);
    }
    init();
  });
  const toggleSwitch = async () => {
    setIsEnabled(previousState => !previousState);
    await storage.setItem('@user/setting/sound', !isEnabled);
  };
  const toggleSecondSwitch = async () => {
    setIsSecondEnabled(previousState => !previousState);
    await storage.setItem('@user/setting/voice', !isSecondEnabled);
  };
  return (
    <Overlay
      visible={modalVisible}
      onClose={closeModal}
      closeOnTouchOutside
      animationType="zoomIn"
      containerStyle={{backgroundColor: 'rgba(37, 8, 10, 0.78)'}}
      childrenWrapperStyle={styles.content}
      extraProps={{
        supportedOrientations: ['portrait', 'landscape'],
      }}
      withScrolling
      animationDuration={500}>
      <ImageBackground
        style={styles.closeIcon}
        resizeMode={'contain'}
        source={require('../../../../assets/images/close-circle.png')}>
        <SoundButton onPress={closeModal}>
          <CloseSvg />
        </SoundButton>
      </ImageBackground>

      <Text style={[headers.primary, styles.header]}>الإعدادات </Text>
      <Row
        style={{
          width: '100%',
          padding: 8,
          borderRadius: 10,
          backgroundColor: '#E8E8E8',
          justifyContent: 'space-between',
        }}>
        <Switch
          value={!isEnabled}
          onValueChange={toggleSwitch}
          disabled={false}
          activeText={'تشغيل'}
          inActiveText={'إيقاف'}
          circleSize={30}
          barHeight={35}
          circleBorderWidth={0}
          backgroundActive={'#D8D8D8'}
          backgroundInactive={'#C1306B'}
          circleActiveColor={'#C1306B'}
          circleInActiveColor={'#FFFFFF'}
          renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
          changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
          innerCircleStyle={{alignItems: 'center', justifyContent: 'center'}} // style for inner animated circle for what you (may) be rendering inside the circle
          outerCircleStyle={{}} // style for outer animated circle
          activeTextStyle={{fontFamily: fonts.FONT_WEIGHT_REGULAR}}
          inactiveTextStyle={{fontFamily: fonts.FONT_WEIGHT_REGULAR}}
          renderActiveText={true}
          renderInActiveText={true}
          switchLeftPx={5} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
          switchRightPx={5} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
          switchWidthMultiplier={3} // multipled by the `circleSize` prop to calculate total width of the Switch
          switchBorderRadius={10} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
        />
        <Text style={[headers.primary, {color: '#C1306B'}]}>الموسيقى</Text>
      </Row>
      <View style={styles.space} />
      <Row
        style={{
          width: '100%',
          padding: 8,
          borderRadius: 10,
          backgroundColor: '#E8E8E8',
          justifyContent: 'space-between',
        }}>
        <Switch
          value={!isSecondEnabled}
          onValueChange={toggleSecondSwitch}
          disabled={false}
          activeText={'تشغيل'}
          inActiveText={'إيقاف'}
          circleSize={30}
          barHeight={35}
          circleBorderWidth={0}
          backgroundActive={'#D8D8D8'}
          backgroundInactive={'#C1306B'}
          circleActiveColor={'#C1306B'}
          circleInActiveColor={'#FFFFFF'}
          renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
          changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
          innerCircleStyle={{alignItems: 'center', justifyContent: 'center'}} // style for inner animated circle for what you (may) be rendering inside the circle
          outerCircleStyle={{}} // style for outer animated circle
          activeTextStyle={{fontFamily: fonts.FONT_WEIGHT_REGULAR}}
          inactiveTextStyle={{fontFamily: fonts.FONT_WEIGHT_REGULAR}}
          renderActiveText={true}
          renderInActiveText={true}
          switchLeftPx={5} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
          switchRightPx={5} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
          switchWidthMultiplier={3} // multipled by the `circleSize` prop to calculate total width of the Switch
          switchBorderRadius={10} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
        />
        <Text style={[headers.primary, {color: '#C1306B'}]}>الصوت</Text>
      </Row>
      <View style={styles.space} />

      <Row
        style={{
          width: '100%',
          padding: 8,
          borderRadius: 10,
          backgroundColor: '#E8E8E8',
          justifyContent: 'space-between',
        }}>
        <SoundButton
          onPress={() => {
            closeModal();
            actions?.onPressAboutLuna();
          }}
          style={{
            width: 80,
            height: 35,
            backgroundColor: '#DDDDDD',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={[headers.primary, {color: '#C1306B'}]}>؟</Text>
        </SoundButton>
        <Text style={[headers.primary, {color: '#C1306B'}]}>عن لونا</Text>
      </Row>
      <RoundedButton
        onPress={actions?.onPressLogout}
        icon={
          <View style={{width: 25, height: 25, marginHorizontal: 8}}>
            <LogoutSvg />
          </View>
        }
        classes={{
          button: {
            paddingHorizontal: 10,
            paddingVertical: 8,
            flexDirection: 'row-reverse',
            alignSelf: 'flex-start',
          },
        }}>
        <Text style={[headers.primary, {color: '#FFFFFF'}]}>تسجيل الخروج</Text>
      </RoundedButton>
    </Overlay>
  );
};
function CustomComponent(isEnabled) {
  return null;
}
export default SettingModal;
