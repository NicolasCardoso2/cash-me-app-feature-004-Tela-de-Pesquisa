import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, View } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import TransactionList from '@/components/TransactionList';

export default function TabTwoScreen() {
  const transactions = [
    { id: '1', name: 'Compra Loja Alpha', amount: '-R$ 200,00', date: '02/10/2024', type: 'Compra' },
    { id: '2', name: 'Cashback Recebido', amount: '+R$ 4,20', date: '03/10/2024', type: 'Cashback' },
    { id: '3', name: 'Compra Loja Bravo', amount: '-R$ 150,00', date: '04/10/2024', type: 'Compra' },
    { id: '4', name: 'Cashback Recebido', amount: '+R$ 5,25', date: '05/10/2024', type: 'Cashback' },
    { id: '5', name: 'Compra Rock & Store', amount: '-R$ 80,00', date: '06/10/2024', type: 'Compra' },
    { id: '6', name: 'Cashback Recebido', amount: '+R$ 1,04', date: '07/10/2024', type: 'Cashback' },
    { id: '7', name: 'Compra Veste Bem', amount: '-R$ 300,00', date: '08/10/2024', type: 'Compra' },
    { id: '8', name: 'Cashback Recebido', amount: '+R$ 15,60', date: '09/10/2024', type: 'Cashback' },
  ];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Extrato</ThemedText>
      </ThemedView>

      <View style={styles.transactionListContainer}>
        <TransactionList transactions={transactions} />
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  transactionListContainer: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
});
