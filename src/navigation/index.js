import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import MainStack from './MainStack';

console.disableYellowBox = true;

const RootStack = createStackNavigator();
const RootStackScreen = ({userToken, setUserToken}) => (
  <RootStack.Navigator headerMode="none">
    {/*userToken*/}
    {/*{true ? (*/}
    <RootStack.Screen
      name="App"
      component={MainStack}
      initialParams={{setUserToken}}
      options={{
        animationEnabled: false,
      }}
    />
    {/*) : (*/}
    {/*    <RootStack.Screen*/}
    {/*        name="Auth"*/}
    {/*        component={AuthStackScreen}*/}
    {/*        initialParams={{ setUserToken, userToken }}*/}
    {/*        options={{*/}
    {/*            animationEnabled: false,*/}
    {/*        }}*/}
    {/*    />*/}
    {/*)}*/}
  </RootStack.Navigator>
);

export default () => {
  // const [userToken, setUserToken] = React.useState(null);
  //   userToken={userToken} setUserToken={setUserToken}
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};
