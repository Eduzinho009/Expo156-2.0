import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import HeaderCustom from '../components/HeaderCustom';
import FooterCustom from '../components/FooterCustom';
import { theme } from '../theme';
import { pagamentosGlobais } from './RecargaScreen'; // 🔹 Usa o mesmo array global

export default function HistoricoScreen() {
  const [pagamentos, setPagamentos] = useState([]);

  useEffect(() => {
    // Atualiza a lista toda vez que a tela é aberta
    setPagamentos([...pagamentosGlobais]);
  });

  return (
    <View style={styles.container}>
      <HeaderCustom title="Histórico de Pagamentos" />
      {pagamentos.length === 0 ? (
        <View style={styles.vazioContainer}>
          <Text style={styles.vazio}>Nenhum pagamento realizado ainda.</Text>
        </View>
      ) : (
        <FlatList
          data={pagamentos}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.data}>{item.data}</Text>
              <Text style={styles.valor}>{item.valor}</Text>
            </View>
          )}
        />
      )}
      <FooterCustom />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  listContent: { padding: theme.spacing.md, paddingBottom: 80 },
  card: {
    backgroundColor: theme.colors.card,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.sm,
    borderRadius: theme.radius.sm,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  data: { fontSize: 16 },
  valor: { fontWeight: 'bold', fontSize: 16, color: '#003C6E' },
  vazioContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vazio: {
    fontSize: 16,
    color: theme.colors.text,
  },
});
