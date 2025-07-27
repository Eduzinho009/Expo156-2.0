import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import HeaderCustom from '../components/HeaderCustom';
import FooterCustom from '../components/FooterCustom';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import { theme } from '../theme';

const DEFAULT_MAP_IMAGE = require('../assets/default_linha.png');

export default function MapaScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'Mapa'>>();
  const { linha } = route.params;

  const imagensMap: { [key: string]: any } = {
    'Linha 101 - Centro': require('../assets/linha1.png'),
    'Linha 102 - Bairro A': require('../assets/linha2.png'),
    'Linha 103 - Bairro B': require('../assets/linha3.png'),
    'Linha 104 - Bairro C': require('../assets/linha1.png'),
    'Linha 105 - Bairro D': require('../assets/linha2.png'),
    'Linha 106 - Bairro E': require('../assets/linha3.png'),
    'Linha 107 - Bairro F': require('../assets/linha1.png'),
    'Linha 108 - Bairro G': require('../assets/linha2.png'),
    'Linha 109 - Bairro H': require('../assets/linha3.png'),
    'Linha 110 - Bairro I': require('../assets/linha1.png'),
  };

  if (!linha || linha === 'Nenhuma linha selecionada') {
    return (
      <View style={styles.container}>
        <HeaderCustom title="Mapa" />
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Selecione uma linha primeiro</Text>
        </View>
        <FooterCustom />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <HeaderCustom title={`Mapa: ${linha}`} />
      <ScrollView contentContainerStyle={styles.content}>
        <Image 
          source={imagensMap[linha] || DEFAULT_MAP_IMAGE} 
          style={styles.image} 
          resizeMode="contain" 
        />
        <Text style={styles.info}>Trajeto da linha: {linha}</Text>
      </ScrollView>
      <FooterCustom />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: theme.colors.background 
  },
  content: {
    padding: theme.spacing.md,
    alignItems: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 18,
    color: theme.colors.text,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 400,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.card,
    marginBottom: theme.spacing.md,
  },
  info: {
    fontSize: 16,
    color: theme.colors.text,
    textAlign: 'center',
  },
});