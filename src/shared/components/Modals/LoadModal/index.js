import React, {useState} from 'react';
import {ActivityIndicator} from 'react-native';
import Overlay from '../../ModalOverlay';

import styles from './styles';

/**
 * @desc About Luna Modal for describing What Luna can help users
 * @param modalVisible
 * @param closeModal
 * @param openModal
 * @param actions
 * @returns {*}
 * @constructor
 */
const LoadModal = ({modalVisible, closeModal, openModal, actions}) => {
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
      <ActivityIndicator
        animating={modalVisible}
        size={'large'}
        color={'#000'}
      />
    </Overlay>
  );
};

export default LoadModal;
