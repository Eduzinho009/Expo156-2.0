import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import RecargaScreen from '../screens/RecargaScreen';
import HistoricoScreen from '../screens/HistoricoScreen';
import OnibusScreen from '../screens/OnibusScreen';
import MapaScreen from '../screens/MapaScreen';
import { theme } from '../theme';

export type RootStackParamList = {
  Home: undefined;
  Recarga: undefined;
  Historico: undefined;
  Ônibus: undefined;
  Mapa: { 
    linha: string ;
   };
};

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#A1CDF4',
        tabBarStyle: {
          backgroundColor: '#003C6E', // <-- altere aqui para a cor desejada
          borderTopWidth: 0,
          paddingBottom: 5,
          height: 60,
        },
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        }} 
      />
      <Tab.Screen 
        name="Recarga" 
        component={RecargaScreen} 
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="card" size={size} color={color} />,
        }} 
      />
      <Tab.Screen 
        name="Historico" 
        component={HistoricoScreen} 
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="time" size={size} color={color} />,
        }} 
      />
      <Tab.Screen 
        name="Ônibus" 
        component={OnibusScreen} 
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="bus" size={size} color={color} />,
        }} 
      />
      <Tab.Screen 
        name="Mapa" 
        component={MapaScreen}
        initialParams={{ linha: 'Nenhuma linha selecionada' }}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="map" size={size} color={color} />,
        }} 
      />
    </Tab.Navigator>
  );
}