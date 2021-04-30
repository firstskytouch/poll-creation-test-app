/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import NewPoll from './src/pages/NewPoll';
import Lowkey from './src/pages/Lowkey';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lowkey" headerMode="none">
        <Stack.Screen name="NewPoll" component={NewPoll} />
        <Stack.Screen name="Lowkey" component={Lowkey} initialParams={{}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
