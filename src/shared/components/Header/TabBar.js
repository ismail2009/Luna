import {Text, TouchableOpacity, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Animated from 'react-native-reanimated';
import styles from './styles';
import {colors, width} from '../../styles/theme.style';
import React from 'react';
import {headers} from '../../styles';
import {SoundButton} from '../Button';

/**
 *
 * @param navigationState
 * @param position
 * @param rgb1
 * @param rgb2
 * @param setIndex
 * @returns {JSX.Element}
 * @constructor
 */
const TabBar = ({navigationState, position, rgb1, rgb2, setIndex}) => {
  const inputRange = navigationState.routes.map((x, i) => i);
  return (
    <View
      style={{
        width: '70%',
        alignSelf: 'center',
        flexDirection: 'row',
        // backgroundColor: 'red',
      }}>
      {navigationState.routes.map((route, i) => {
        // console.log(position, 'position');
        const color = Animated.color(
          Animated.round(
            Animated.interpolate(position, {
              inputRange,
              outputRange: inputRange.map(inputIndex =>
                inputIndex === i ? rgb1[0] : rgb2[0],
              ),
            }),
          ),
          Animated.round(
            Animated.interpolate(position, {
              inputRange,
              outputRange: inputRange.map(inputIndex =>
                inputIndex === i ? rgb1[1] : rgb2[1],
              ),
            }),
          ),
          Animated.round(
            Animated.interpolate(position, {
              inputRange,
              outputRange: inputRange.map(inputIndex =>
                inputIndex === i ? rgb1[2] : rgb2[2],
              ),
            }),
          ),
        );
        const color2 = Animated.color(
          Animated.round(
            Animated.interpolate(position, {
              inputRange,
              outputRange: inputRange.map(inputIndex =>
                inputIndex === i ? 81 : 95,
              ),
            }),
          ),
          Animated.round(
            Animated.interpolate(position, {
              inputRange,
              outputRange: inputRange.map(inputIndex =>
                inputIndex === i ? 81 : 95,
              ),
            }),
          ),
          Animated.round(
            Animated.interpolate(position, {
              inputRange,
              outputRange: inputRange.map(inputIndex =>
                inputIndex === i ? 229 : 249,
              ),
            }),
          ),
        );
        return (
          <SoundButton style={{width: '35%'}} onPress={() => setIndex(i)}>
            <View style={[styles.titleView, {width: '100%'}]}>
              <Animated.View
                style={[styles.titleViewContainer, {backgroundColor: color2}]}>
                <Animated.View
                  style={[
                    styles.titleSubView,
                    {
                      borderTopLeftRadius: wp(43) / 2,
                      backgroundColor: `rgb(${rgb2[0]},${rgb2[1]},${rgb2[2]})`,
                    },
                  ]}
                />
                <Animated.View
                  style={[
                    styles.titleSubView,
                    {
                      borderTopRightRadius: 20,
                      backgroundColor: `rgb(${rgb2[0]},${rgb2[1]},${rgb2[2]})`,
                    },
                  ]}
                />
              </Animated.View>
              <Animated.View style={[styles.shape, {backgroundColor: color2}]}>
                <Animated.View
                  style={[
                    styles.shapeSub,
                    {
                      backgroundColor: `rgb(${rgb2[0]},${rgb2[1]},${rgb2[2]})`,
                      borderBottomLeftRadius: wp(43) / 2,
                    },
                  ]}
                />
                <Animated.View
                  style={[
                    styles.shapeSub,
                    {
                      backgroundColor: `rgb(${rgb2[0]},${rgb2[1]},${rgb2[2]})`,
                      borderBottomRightRadius: wp(43) / 2,
                    },
                  ]}
                />
              </Animated.View>
              <Animated.View
                style={[
                  styles.titleContainer,
                  {backgroundColor: color2, justifyContent: 'center'},
                ]}>
                <Text
                  style={[
                    headers.primary,
                    {color: colors.WHITE_COLOR, padding: 5},
                  ]}>
                  {route.title}
                </Text>
              </Animated.View>
            </View>
          </SoundButton>
        );
      })}
    </View>
  );
};

export default TabBar;
