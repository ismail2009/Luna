import React from 'react';
import {ImageBackground, TouchableOpacity, View} from 'react-native';
import Overlay from '../../ModalOverlay';

import CloseSvg from '../../../../assets/images/SVG/close.svg';
import {RoundedButton, SoundButton} from '../../Button';
import styles from './styles';

/**
 * @desc Modal to navigate to Login or Sign up screens
 * @param modalVisible
 * @param closeModal
 * @param openModal
 * @param actions
 * @returns {*}
 * @constructor
 */
const Index = ({modalVisible, closeModal, openModal, actions}) => {
  return (
    <Overlay
      visible={modalVisible}
      onClose={closeModal}
      closeOnTouchOutside
      animationType="zoomIn"
      containerStyle={{backgroundColor: 'rgba(37, 8, 10, 0.78)'}}
      childrenWrapperStyle={styles.content}
      animationDuration={500}>
      <ImageBackground
        style={styles.closeIcon}
        resizeMode={'contain'}
        source={require('../../../../assets/images/close-circle.png')}>
        <SoundButton onPress={closeModal}>
          <CloseSvg />
        </SoundButton>
      </ImageBackground>
      {/*<View >*/}
      <RoundedButton
        classes={{button: {width: '100%'}}}
        onPress={actions?.onPressLogin}>
        تسجيل الدخول
      </RoundedButton>
      <RoundedButton
        classes={{button: {width: '100%'}}}
        onPress={actions?.onPressSignUp}>
        إنشاء حساب
      </RoundedButton>
      {/*</View>*/}
    </Overlay>
  );
};

export default Index;
