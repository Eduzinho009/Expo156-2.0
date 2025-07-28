import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import HeaderCustom from '../components/HeaderCustom';
import FooterCustom from '../components/FooterCustom';
import { theme } from '../theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <HeaderCustom title="URBS" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeTitle}>Bem-vindo!</Text>
          <Text style={styles.welcomeSubtitle}>Use o menu abaixo para acessar as funções.</Text>
        </View>
        <View style={styles.wrapcards}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Ônibus')}>
            <MaterialCommunityIcons 
              name="bus" 
              size={32} 
              color={theme.colors.primary} 
              style={styles.icon}
            />
            <Text style={styles.cardTitle}>Linhas Disponíveis</Text>
            <Text style={styles.cardText}>Verifique as Linhas de Onibus e utilize a opção de mapa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Recarga')}>
            <MaterialCommunityIcons 
              name="credit-card" 
              size={32} 
              color={theme.colors.primary} 
              style={styles.icon}
            />
            <Text style={styles.cardTitle}>Recarregar Cartão Transporte</Text>
            <Text style={styles.cardText}>Recarregue seu URBS e circule por Curitiba com tranquilidade.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Historico')}>
            <MaterialCommunityIcons 
              name="history" 
              size={32} 
              color={theme.colors.primary} 
              style={styles.icon}
            />
            <Text style={styles.cardTitle}>Histórico de Pagamentos</Text>
            <Text style={styles.cardText}>Veja seu histórico de pagamentos na seção de histórico.</Text> 
          </TouchableOpacity>
        </View>
      </ScrollView>
      <FooterCustom />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    padding: theme.spacing.lg,
  },
  welcomeCard: {
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
  },
  welcomeTitle: {
    ...theme.typography.h2,
    color: theme.colors.primary,
    textAlign: 'center',
    marginBottom: theme.spacing.xs,
  },
  welcomeSubtitle: {
    ...theme.typography.body,
    color: theme.colors.text,
    textAlign: 'center',
  },
  card: {
    border: '2px solid #2e86ab',
    backgroundColor: '#FFFFFF',
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    borderRadius: theme.radius.lg,
    ...theme.shadows.sm,
    alignItems: 'center',
    minWidth: 160,
    maxWidth: 180,
    flexGrow: 1,
    marginHorizontal: theme.spacing.sm,
  },
  cardTitle: {
    ...theme.typography.h3,
    color: theme.colors.primary,
    marginVertical: theme.spacing.sm,
    textAlign: 'center',
    borderBottomWidth: 2,  // mantém ou define a borda de baixo
    borderLeftWidth: 2,    // mantém ou define a borda esquerda
    borderRightWidth: 2,   // mantém ou define a borda direita
    borderColor: '#2e86ab', // cor da borda
    width: '180px',
    height: '60px'
  },
  cardText: {
    ...theme.typography.body,
    color: theme.colors.text,
    textAlign: 'center',
  },
  icon: {
    marginBottom: theme.spacing.xs,
  },
  wrapcards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: theme.spacing.md,
    marginTop: theme.spacing.md,
  },
});