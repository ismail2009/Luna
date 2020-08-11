import React from 'react';
import {View} from 'react-native';

/**
 * @desc Row Grid Layout with custom props
 * @param reverse {boolean}
 * @param style  {Object}
 * @param children {any}
 * @returns {*}
 * @constructor
 */
const Row = ({reverse, style, children}) => (
  <View style={[{flexDirection: reverse ? 'row-reverse' : 'row'}, style]}>
    {children}
  </View>
);
export default Row;
