import {Image, StyleSheet, Text, TouchableOpacity,View} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';




import Products from './Products';
import Map from '../Map/MapShops';
import Detail from '../../components/Card';


const Stack = createNativeStackNavigator();


const iconUrl =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmrjmWv58Qw-Cjo05ZBK8XWtOU0IDsrHhATg&usqp=CAU';

const StackShops = () => {
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
              name="Products"
              component={Products}
              options={{headerShown: false}}
            />

            <Stack.Screen
              options={({route, navigation}) => {
                return {
                  headerTitleAlign: 'center',
                  title: route?.params?.headerTitle,
                };
              }}
              name={'Detail'}
              component={Detail}
            />
          </Stack.Navigator>
    
    );
};

export default StackShops;

const styles = StyleSheet.create({
  icon: {width: 30, height: 30},
});
