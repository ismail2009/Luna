import styles from './styles';
import {Text, View} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen/index';
import {headers} from '../../styles';
import {colors} from '../../styles/theme.style';
import React from 'react';

const TitleView = ({title, bgColorTitle, bgColor1, bgColor2}) => (
  <View style={[styles.titleView, {width: '45%', alignSelf: 'center'}]}>
    <View
      style={[
        styles.titleViewContainer,
        {backgroundColor: bgColorTitle || bgColor1},
      ]}>
      <View
        style={[
          styles.titleSubView,
          {
            borderTopLeftRadius: widthPercentageToDP(43) / 2,
            backgroundColor: bgColor2,
          },
        ]}
      />
      <View
        style={[
          styles.titleSubView,
          {
            borderTopRightRadius: 20,
            backgroundColor: bgColor2,
          },
        ]}
      />
    </View>
    <View style={[styles.shape, {backgroundColor: bgColorTitle || bgColor1}]}>
      <View
        style={[
          styles.shapeSub,
          {
            backgroundColor: bgColor2,
            borderBottomLeftRadius: widthPercentageToDP(43) / 2,
          },
        ]}
      />
      <View
        style={[
          styles.shapeSub,
          {
            backgroundColor: bgColor2,
            borderBottomRightRadius: widthPercentageToDP(43) / 2,
          },
        ]}
      />
    </View>
    <View
      style={[
        styles.titleContainer,
        {backgroundColor: bgColorTitle || bgColor1},
      ]}>
      <Text
        style={[headers.secondary, {color: colors.WHITE_COLOR, padding: 5}]}>
        {title}
      </Text>
    </View>
  </View>
);
export default TitleView;
