import React from 'react';
import {ImageBackground, Text, View, TouchableOpacity} from 'react-native';
import {headers} from '../../styles';
import {colors} from '../../styles/theme.style';

/**
 * @desc Costumed StoreBubble Component
 * @param bgColor {string}
 * @returns {*}
 * @constructor
 */
const StoreBubble = ({bgColor}) => (
  <TouchableOpacity
    style={{
      width: 65,
      height: 60,
      backgroundColor: bgColor,
      borderTopLeftRadius: 100 / 2,
      borderBottomLeftRadius: 100 / 2,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-end',
    }}>
    <ImageBackground
      style={{
        width: '100%',
        height: '98%',
        marginTop: -5,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      resizeMode={'contain'}
      source={require('../../../assets/images/store/store.png')}>
      <Text style={[headers.paragraph, {color: colors.WHITE_COLOR}]}>
        متجر لونا
      </Text>
    </ImageBackground>
  </TouchableOpacity>
);
export default StoreBubble;
