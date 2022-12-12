import {Image, StyleSheet, Text, TouchableOpacity,View} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Map from '../Map/MapShops';
import ShopProducts from '../../components/ShopProducts';
import Detail from '../../components/Card';


const Stack = createNativeStackNavigator();


const iconUrl =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmrjmWv58Qw-Cjo05ZBK8XWtOU0IDsrHhATg&usqp=CAU';

const StackMap = () => {
    return (
        
          <Stack.Navigator
            screenOptions={({navigation}) => {
              return {
                animation: 'fade_from_bottom',
                headerLeft: () => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        navigation.goBack();
                      }}>
                      <Text>Back</Text>
                    </TouchableOpacity>
                  );
                },
              };
            }}>

            <Stack.Screen
              name="Map"
              component={Map}
              options={{headerShown: false}}
            />

            <Stack.Screen
              options={({route, navigation}) => {
                return {
                  headerTitleAlign: 'center',
                  title: route?.params?.headerTitle,
                  // title: 'Product 1',
                };
              }}
              name={'ShopProducts'}
              component={ShopProducts}
            />
             <Stack.Screen
              options={({route, navigation}) => {
                return {
                  headerTitleAlign: 'center',
                  title: route?.params?.headerTitle,
                  // title: 'Product 1',
                };
              }}
              name={'Detail'}
              component={Detail}
            />
          </Stack.Navigator>
    
    );
};

export default StackMap;

const styles = StyleSheet.create({
  icon: {width: 30, height: 30},
});
