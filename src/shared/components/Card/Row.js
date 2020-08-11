import React from 'react';
import {View} from 'react-native';
const Row = ({children, style, reverse}) => (
  <View style={[{flexDirection: reverse ? 'row-reverse' : 'row'}, style]}>
    {children}
  </View>
);
export default Row;
