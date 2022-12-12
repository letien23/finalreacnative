// In App.js in a new project

import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import StackShops from './src/screens/Products/Stack';
import StackMap from './src/screens/Map/MapStack';




const BottomTab = createBottomTabNavigator();
const iconUrl =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmrjmWv58Qw-Cjo05ZBK8XWtOU0IDsrHhATg&usqp=CAU';


// const Stack = createNativeStackNavigator();
const BottomTabs = () => {
  return(
    
<BottomTab.Navigator sceneContainerStyle={{ backgroundColor: 'white' }}>
        
        <BottomTab.Screen
          name="StackShops"
          component={StackShops}
          options={() => {
            return {
              tabBarIcon: ({ focused }) => (
                <Image
                  source={{
                    uri: iconUrl,
                  }}
                  style={styles.icon}
                />
              ),
              headerShown: false,
            };
          }}
        />
        <BottomTab.Screen
          name="StackMap"
          component={StackMap}
          options={() => {
            return {
              tabBarIcon: () => (
                <Image
                  source={{
                    uri: iconUrl,
                  }}
                  style={styles.icon}
                />
              ),
              headerShown: false,
            };
          }}
        />
      </BottomTab.Navigator>
  )
}
function App() {
  return (
    <NavigationContainer>
      <BottomTabs/>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  icon: {width: 30, height: 30},
});