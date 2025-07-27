import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import HeaderCustom from '../components/HeaderCustom';
import FooterCustom from '../components/FooterCustom';
import { theme } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { Ionicons } from '@expo/vector-icons';


type Linha = {
  id: string;
  nome: string;
  disponivel: boolean;
  imagem?: any;
};

const linhas: Linha[] = [
  { id: '1', nome: 'Linha 101 - Centro', disponivel: true, imagem: require('../assets/linha1.png') },
  { id: '2', nome: 'Linha 102 - Bairro A', disponivel: true, imagem: require('../assets/linha2.png') },
  { id: '3', nome: 'Linha 103 - Bairro B', disponivel: true, imagem: require('../assets/linha3.png') },
  { id: '4', nome: 'Linha 104 - Bairro C', disponivel: true, imagem: require('../assets/linha1.png') },
  { id: '5', nome: 'Linha 105 - Bairro D', disponivel: true, imagem: require('../assets/linha2.png') },
  { id: '6', nome: 'Linha 106 - Bairro E', disponivel: true, imagem: require('../assets/linha3.png') },
  { id: '7', nome: 'Linha 107 - Bairro F', disponivel: true, imagem: require('../assets/linha1.png') },
  { id: '8', nome: 'Linha 108 - Bairro G', disponivel: true, imagem: require('../assets/linha2.png') },
  { id: '9', nome: 'Linha 109 - Bairro H', disponivel: true, imagem: require('../assets/linha3.png') },
  { id: '10', nome: 'Linha 110 - Bairro I', disponivel: true, imagem: require('../assets/linha1.png') },

  { id: '11', nome: 'Linha 201 - Indisponível A', disponivel: false },
  { id: '12', nome: 'Linha 202 - Indisponível B', disponivel: false },
  { id: '13', nome: 'Linha 203 - Indisponível C', disponivel: false },
  { id: '14', nome: 'Linha 204 - Indisponível D', disponivel: false },
  { id: '15', nome: 'Linha 205 - Indisponível E', disponivel: false },
  { id: '16', nome: 'Linha 206 - Indisponível F', disponivel: false },
  { id: '17', nome: 'Linha 207 - Indisponível G', disponivel: false },
  { id: '18', nome: 'Linha 208 - Indisponível H', disponivel: false },
  { id: '19', nome: 'Linha 209 - Indisponível I', disponivel: false },
  { id: '20', nome: 'Linha 210 - Indisponível J', disponivel: false },
];

export default function OnibusScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const linhasDisponiveis = linhas.filter(l => l.disponivel);
  const linhasIndisponiveis = linhas.filter(l => !l.disponivel);

  const handleLinhaPress = (linha: Linha) => {
  if (linha.disponivel) {
    navigation.navigate('Mapa', { 
      linha: linha.nome || 'Linha não especificada' 
    });
  } else {
    Alert.alert('Linha Indisponível', `A linha "${linha.nome}" está temporariamente indisponível.`);
  }
};

  const renderLinhaItem = (item: Linha, isDisponivel: boolean) => (
    <TouchableOpacity
      style={[styles.card, !isDisponivel && styles.cardIndisponivel]}
      onPress={() => handleLinhaPress(item)}
    >
      <Ionicons
        name="bus"
        size={14}
        color={isDisponivel ? theme.colors.primary : '#999'}
        style={{ marginRight: 4 }}
      />
      <Text style={[styles.linha, { color: isDisponivel ? theme.colors.primary : '#999' }]} numberOfLines={1}>
        {item.nome}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <HeaderCustom title="Linhas de Ônibus" />

      <Text style={styles.sectionTitle}>Linhas Disponíveis</Text>
      <FlatList
        data={linhasDisponiveis}
        keyExtractor={(item) => item.id}
        horizontal
        contentContainerStyle={styles.listContentHorizontal}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => renderLinhaItem(item, true)}
      />

      <Text style={styles.sectionTitle}>Linhas Indisponíveis</Text>
      <FlatList
        data={linhasIndisponiveis}
        keyExtractor={(item) => item.id}
        horizontal
        contentContainerStyle={styles.listContentHorizontal}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => renderLinhaItem(item, false)}
      />

      <FooterCustom />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: theme.colors.background 
  },
  scrollContent: {
    paddingVertical: theme.spacing.md,
  },
  sectionTitle: {
    fontSize: theme.typography.h3.fontSize,
    fontWeight: theme.typography.h3.fontWeight,
    color: theme.colors.text,
    marginLeft: theme.spacing.lg,
    marginBottom: theme.spacing.sm,
    marginTop: theme.spacing.lg,
  },
  listContentHorizontal: {  
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: theme.spacing.sm,
  },
  card: {
    width: 160,
    height: 120,
    marginRight: theme.spacing.md,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.md,
    justifyContent: 'center',
    ...theme.shadows.sm,
  },
  cardDisponivel: {
    backgroundColor: theme.colors.card,
    borderLeftWidth: 4,
    borderLeftColor: theme.colors.success,
  },
  cardIndisponivel: {
    backgroundColor: '#f8f9fa',
    borderLeftWidth: 4,
    borderLeftColor: theme.colors.error,
  },
  linha: {
    fontSize: theme.typography.body.fontSize,
    fontWeight: '600' as const,
    marginTop: theme.spacing.sm,
  },
  icon: {
    alignSelf: 'center',
  },
});