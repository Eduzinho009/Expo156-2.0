import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import HeaderCustom from '../components/HeaderCustom';
import FooterCustom from '../components/FooterCustom';
import { theme } from '../theme';

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <HeaderCustom title="Registrar" />
      <View style={styles.content}>
        <TextInput placeholder="Nome" style={styles.input} />
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Senha" secureTextEntry style={styles.input} />
        <Button title="Registrar" color={theme.colors.primary} onPress={() => {}} />
      </View>
      <FooterCustom />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    padding: theme.spacing.md,
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: 10,
    borderRadius: theme.radius.sm,
    marginBottom: theme.spacing.md,
  },
});
