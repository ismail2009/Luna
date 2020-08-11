// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {
  HomeScreen,
  SignUpScreen,
  NewPasswordScreen,
  OptScreen,
  NumbersAndChars,
  // ArabicChars,
  // ArabicNumbers,
  // EnglishNumbers,
  DrawSketchScreen,
  FullScreenVideo,
  // AnimalsScreen,
  DrawingArtScreen,
  GamesScreen,
  SongsScreen,
  ContentScreen,
  Browser,
} from '../screens';
import MyTabs from './TopTabNavigator';
import {createStackNavigator} from '@react-navigation/stack';
const HomeStack = createStackNavigator();

function MainStack() {
  return (
    <HomeStack.Navigator headerMode={'none'}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="NumbersAndChars" component={NumbersAndChars} />
      <HomeStack.Screen name="ContentScreen" component={ContentScreen} />
      <HomeStack.Screen name="Browser" component={Browser} />
      {/*<HomeStack.Screen name="ArabicChars" component={ArabicChars} />*/}
      {/*<HomeStack.Screen name="ArabicNumbers" component={ArabicNumbers} />*/}
      <HomeStack.Screen name="DrawSketchScreen" component={DrawSketchScreen} />
      <HomeStack.Screen name="FullScreenVideo" component={FullScreenVideo} />
      {/*<HomeStack.Screen name="AnimalsScreen" component={AnimalsScreen} />*/}
      <HomeStack.Screen name="DrawingArtScreen" component={DrawingArtScreen} />
      <HomeStack.Screen name="SongsScreen" component={SongsScreen} />
      <HomeStack.Screen name="GamesScreen" component={GamesScreen} />
      {/*<HomeStack.Screen name="EnglishNumbers" component={EnglishNumbers} />*/}
      <HomeStack.Screen name="SignUp" component={SignUpScreen} />
      <HomeStack.Screen name="NewPassword" component={NewPasswordScreen} />
      <HomeStack.Screen name="OptPassword" component={OptScreen} />
    </HomeStack.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? 'Home';

  switch (routeName) {
    case 'Notification':
      return 'Notifications Settings';
    default:
      return true;
  }
}
function getHeaderShown(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? 'Home';
  console.log('routeNamed', routeName);
  switch (routeName) {
    case 'Menu':
      return false;
    case 'Home':
      return false;
    case 'Account':
      return false;
    default:
      return true;
  }
}
export default MainStack;
