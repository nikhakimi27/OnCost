import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import TwoChoiceScreen from './screens/TwoChoiceScreen';
import WallInputScreen from './screens/WallInputScreen';
import RoofInputScreen from './screens/RoofInputScreen';
import WallOutputScreen from './screens/WallOutputScreen';
import RoofOutputScreen from './screens/RoofOutputScreen';

const AppStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <AppStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <AppStack.Screen name="TwoChoice" component={TwoChoiceScreen} />
        <AppStack.Screen name="WallInput" component={WallInputScreen} />
        <AppStack.Screen name="RoofInput" component={RoofInputScreen} />
        <AppStack.Screen name="WallOutput" component={WallOutputScreen} />
        <AppStack.Screen name="RoofOutput" component={RoofOutputScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
