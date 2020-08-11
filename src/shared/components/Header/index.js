import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import _ from 'lodash';
import SettingSvg from '../../../assets/images/SVG/setting.svg';
// import CoinSvg from '../../../assets/images/SVG/coin.svg';
import UserSvg from '../../../assets/images/SVG/user.svg';
import ArrowSvg from '../../../assets/images/SVG/arrow-back.svg';
import {colors} from '../../styles/theme.style';
import {headers} from '../../styles';
import TitleView from './TitleView';
import TabBar from './TabBar';
import {SceneMap, TabView} from 'react-native-tab-view';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen/index';
import {SoundButton} from '../Button';

// bgColor1: '#32ABBF'
// bgColor2: bgColor2
/**
 *
 * @param title
 * @param bgColor1
 * @param bgColor2
 * @param bgColorTitle
 * @param isSetting
 * @param isGoBack
 * @param actions
 * @param isTab
 * @param tabConfig
 * @param username,
 * @returns {JSX.Element}
 * @constructor
 */
const CustomHeader = ({
  title,
  bgColor1,
  bgColor2,
  bgColorTitle,
  isSetting,
  isGoBack,
  actions,
  isTab,
  tabConfig,
  username,
}) => {
  console.log(bgColor1, bgColor2, '!isGoBack');
  return (
    <View style={[styles.headerContainer]}>
      <View
        style={[
          styles.leftNavigatorView,
          {backgroundColor: bgColor1},
          {position: 'absolute', top: -3, left: 0, zIndex: 3434},
        ]}>
        <SoundButton
          onPress={() => {
            isSetting ? actions?.openSetting() : actions?.goBack();
          }}
          style={{
            width: 30,
            alignSelf: 'flex-end',
          }}>
          {isSetting ? <SettingSvg /> : <ArrowSvg />}
        </SoundButton>
      </View>
      <View />
      {isTab ? (
        <TabView
          navigationState={{index: tabConfig.index, routes: tabConfig.routes}}
          renderScene={SceneMap({
            ...tabConfig.sceneMap,
          })}
          onIndexChange={tabConfig.setIndex}
          initialLayout={tabConfig.initialLayout}
          renderTabBar={props => (
            <TabBar
              {...props}
              style={{width: wp(100), backgroundColor: 'pink'}}
              sceneContainerStyle={{backgroundColor: 'pink'}}
              rgb1={tabConfig.rgb1}
              rgb2={tabConfig.rgb2}
              setIndex={tabConfig.setIndex}
            />
          )}
        />
      ) : (
        title && (
          <TitleView
            title={title}
            bgColor1={bgColor1}
            bgColor2={bgColor2}
            bgColorTitle={bgColorTitle}
          />
        )
      )}
      {!isGoBack && (
        <View
          style={[
            styles.rightNavigatorView,
            {position: 'absolute', top: 0, right: 0, zIndex: 3434},
          ]}>
          <View style={[styles.shape, {backgroundColor: bgColor1}]}>
            <View style={[styles.shapeTopRight, {backgroundColor: bgColor2}]} />
            <View style={[styles.shapeTopLeft, {backgroundColor: bgColor2}]} />
          </View>
          <View
            style={[styles.navigatorContainer, {backgroundColor: bgColor1}]}>
            {/*<View*/}
            {/*  style={[*/}
            {/*    styles.navigatorSubView,*/}
            {/*    {*/}
            {/*      backgroundColor: '#35325D',*/}
            {/*    },*/}
            {/*  ]}>*/}
            {/*  <View style={styles.coinBubble}>*/}
            {/*    <CoinSvg />*/}
            {/*  </View>*/}
            {/*  <Text style={[headers.secondary, {color: colors.WHITE_COLOR}]}>*/}
            {/*    3*/}
            {/*  </Text>*/}
            {/*</View>*/}
            <View
              style={[
                styles.userBubble,
                {
                  backgroundColor: '#35325D',
                },
              ]}>
              <View style={styles.userSvgContainer}>
                <UserSvg />
              </View>
              <View style={{marginHorizontal: '2%'}} />
              <View style={{width: 100, alignItems: 'flex-end'}}>
                <Text style={[headers.primary, {color: colors.WHITE_COLOR}]}>
                  {_.truncate(username || 'زائر', {
                    length: 10,
                    separator: ' ',
                  })}
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};
export default CustomHeader;
