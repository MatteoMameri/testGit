import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Settings from './screens/Settings';
import Icon from 'react-native-vector-icons/Ionicons'; // Importer des icônes

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home" // Page de départfff
        screenOptions={({ route }) => ({
          headerShown: false, // Enlever l'entête par défaut
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            // Assigner une icône en fonction de la route
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // Retourne une icône Ionicons
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue', // Couleur de l'icône active
          tabBarInactiveTintColor: 'gray', // Couleur de l'icône inactive
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
