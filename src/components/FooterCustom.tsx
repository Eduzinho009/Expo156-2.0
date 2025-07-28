import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../theme';

export default function FooterCustom() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© 2025 URBS Simples</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.md,
    backgroundColor: '#003C6E',
    borderTopLeftRadius: theme.radius.lg,
    borderTopRightRadius: theme.radius.lg,
    ...theme.shadows.md,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: theme.typography.caption.fontSize,
    opacity: 0.8,
  },
});