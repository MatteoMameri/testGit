import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import A from '../screens/A';
import B from '../screens/B';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="A" // Point de départ de la navigation
      screenOptions={{
        headerShown: true, // Affiche l'entête (modifiable selon le besoin)
      }}
    >
      <Stack.Screen name="A" component={A} />
      <Stack.Screen name="B" component={B} />
    </Stack.Navigator>
  );
}
