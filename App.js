import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from './src/screens/HomeScreen.js';
import { TransitionScreen } from './src/screens/TransitionScreen.js';
import { UseTransitionScreen } from './src/screens/UseTransitionScreen.js';

const Stack = createStackNavigator();

const App = () => {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ header: () => null }}
          initialRouteName={'UseTransitionScreen'}
        >
          <Stack.Screen
            name='HomeScreen'
            component={HomeScreen}
          />
          <Stack.Screen
            name='UseTransitionScreen'
            component={UseTransitionScreen}
          />
          <Stack.Screen
            name='TransitionScreen'
            component={TransitionScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;