import React, {useState} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import Overlay from '../../ModalOverlay';

import CloseSvg from '../../../../assets/images/SVG/close.svg';
import {headers} from '../../../styles';
import styles from './styles';
import {SoundButton} from '../../Button';

/**
 * @desc About Luna Modal for describing What Luna can help users
 * @param modalVisible
 * @param closeModal
 * @param openModal
 * @param actions
 * @returns {*}
 * @constructor
 */
const AboutLunaModal = ({modalVisible, closeModal, openModal, actions}) => {
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
      animationDuration={500}>
      <ImageBackground
        style={styles.closeIcon}
        resizeMode={'contain'}
        source={require('../../../../assets/images/close-circle.png')}>
        <SoundButton onPress={closeModal}>
          <CloseSvg />
        </SoundButton>
      </ImageBackground>

      <Text style={[headers.primary, styles.header]}>عن لونا</Text>
      <View
        style={{
          width: '100%',
          paddingHorizontal: 10,
          paddingVertical: 15,
          backgroundColor: '#E8E8E8',
          borderRadius: 10,
        }}>
        <Text
          style={[
            headers.primaryMedium,
            {
              width: '80%',
              color: '#FFA515',
              textAlign: 'center',
              alignSelf: 'center',
            },
          ]}>
          تطبيق لونا هو عالم من المرح والتعليم الهادف والآمن للأطفال، حيث يضم
          محتوى متنوع وشامل يسهم في إثراء لغة وفكر الطفل بطريقة مرحة
        </Text>
      </View>
    </Overlay>
  );
};

export default AboutLunaModal;
