/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainComponent from './components/MainComponent';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import {MainScreen, FirstScreen, SecondScreen} from './components/ScreenNames';

const App: () => React$Node = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={MainScreen}
          component={MainComponent}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={FirstScreen}
          component={FirstComponent}
          options={{
            headerTitle: 'Maha Dasha & Varsh Fal',
            headerStyle: {
              backgroundColor: '#dee6f7',
              color: '#000',
            },
          }}
        />
        <Stack.Screen
          name={SecondScreen}
          component={SecondComponent}
          options={{
            headerTitle: 'Charts',
            headerStyle: {
              backgroundColor: '#dee6f7',
              color: '#000',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
