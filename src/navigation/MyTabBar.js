import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Animated from 'react-native-reanimated';
import styles from '../shared/components/Header/styles';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {headers} from '../shared/styles';
import {colors} from '../shared/styles/theme.style';

function MyTabBar({
  state,
  descriptors,
  navigation,
  position,
  bgColor1,
  bgColorTitle,
  bgColor2,
}) {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = Animated.interpolate(position, {
          inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 0)),
        });

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.titleView}>
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
            <View
              style={[
                styles.shape,
                {backgroundColor: bgColorTitle || bgColor1},
              ]}>
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
              <Animated.Text
                style={[
                  headers.secondary,
                  {color: colors.WHITE_COLOR},
                  {opacity},
                ]}>
                {label}
              </Animated.Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default MyTabBar;
// ...

// <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
//     {...}
// </Tab.Navigator>
