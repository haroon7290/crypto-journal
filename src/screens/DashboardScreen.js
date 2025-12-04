import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>Win Rate</Text>
        <Text style={styles.cardValue}>--%</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>Total PNL</Text>
        <Text style={styles.cardValue}>$0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  title: { fontSize: 26, color: '#fff', fontWeight: 'bold', marginBottom: 20 },
  card: {
    backgroundColor: '#1f1f1f',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },
  cardLabel: { fontSize: 16, color: '#aaa' },
  cardValue: { fontSize: 22, fontWeight: 'bold', color: '#4CAF50' },
});
