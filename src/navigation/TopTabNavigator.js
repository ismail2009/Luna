import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MyTabBar from './MyTabBar';
import {NumbersAndChars, AnimalsScreen} from '../screens';
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="NumbersAndChars"
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name="NumbersAndChars"
        component={NumbersAndChars}
        options={{tabBarLabel: 'أرقام و حروف'}}
      />
      <Tab.Screen
        name="AnimalsScreen"
        component={AnimalsScreen}
        options={{tabBarLabel: 'أرقام و حروف'}}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
