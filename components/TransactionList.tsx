import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

interface Transaction {
  id: string;
  name: string;
  amount: string;
  date: string;
  type: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  const renderItem = ({ item }: { item: Transaction }) => (
    <ThemedView style={styles.transactionItem}>
      <View style={styles.transactionDetails}>
        <ThemedText style={styles.transactionName}>{item.name}</ThemedText>
        <ThemedText style={styles.transactionDate}>{item.date}</ThemedText>
      </View>
      <ThemedText style={[styles.transactionAmount, item.amount.startsWith('+') ? styles.positiveAmount : styles.negativeAmount]}>
        {item.amount}
      </ThemedText>
    </ThemedView>
  );

  return (
    <FlatList
      data={transactions}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 20,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
  },
  transactionDetails: {
    flexDirection: 'column',
  },
  transactionName: {
    fontSize: 16,
    fontWeight: '500',
  },
  transactionDate: {
    fontSize: 14,
    color: '#808080',
    marginTop: 4,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '600',
  },
  positiveAmount: {
    color: '#4CAF50', // Cor verde para valores positivos (cashback recebido)
  },
  negativeAmount: {
    color: '#F44336', // Cor vermelha para valores negativos (compras)
  },
});

export default TransactionList;
