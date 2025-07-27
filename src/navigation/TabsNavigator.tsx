import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import HistoricoScreen from '../screens/HistoricoScreen';
import RecargaScreen from '../screens/RecargaScreen';
import OnibusScreen from '../screens/OnibusScreen';
import MapaScreen from '../screens/MapaScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#0288D1',
        tabBarInactiveTintColor: '#aaa',
        tabBarIcon: ({ color, size }) => {
          let iconName: any;

          switch (route.name) {
            case 'Home': iconName = 'home-outline'; break;
            case 'Historico': iconName = 'receipt-outline'; break;
            case 'Recarga': iconName = 'card-outline'; break;
            case 'Ônibus': iconName = 'bus-outline'; break;
            case 'Mapa': iconName = 'map-outline'; break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Historico" component={HistoricoScreen} />
      <Tab.Screen name="Recarga" component={RecargaScreen} />
      <Tab.Screen name="Ônibus" component={OnibusScreen} />
      <Tab.Screen name="Mapa" component={MapaScreen} />
    </Tab.Navigator>
  );
}