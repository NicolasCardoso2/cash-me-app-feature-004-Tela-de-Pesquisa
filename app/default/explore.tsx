import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SearchInput from '../../components/SearchInput';
import EstablishmentList from '../../components/EstablishmentList';

export default function ExploreScreen() {
  const insets = useSafeAreaInsets();

  const previousSearches = [
    { id: '1', title: 'Loja Alpha' },
    { id: '2', title: 'Loja Rock' },
    { id: '3', title: 'Estabelecimento RN' },
  ];

  const establishments = [
    { id: '1', name: 'Loja Alpha', cashback: '2.1%', category: 'Eletrônicos', logo: require('../../assets/images/estabelecimentos/logo.png') },
    { id: '2', name: 'Loja Bravo', cashback: '3.5%', category: 'Roupas', logo: require('../../assets/images/estabelecimentos/logo1.jpeg') },
    { id: '3', name: 'Loja Charlie', cashback: '1.8%', category: 'Alimentos', logo: require('../../assets/images/estabelecimentos/logo2.jpeg') },
    { id: '4', name: 'Loja Albert', cashback: '4.0%', category: 'Serviços', logo: require('../../assets/images/estabelecimentos/logo3.jpeg') },
    { id: '5', name: 'Rock & Store', cashback: '1.3%', category: 'Alimentos', logo: require('../../assets/images/estabelecimentos/logo4.jpeg') },
    { id: '6', name: 'Loja Tech Link', cashback: '2.0%', category: 'Games', logo: require('../../assets/images/estabelecimentos/logo5.png') },
    { id: '7', name: 'Loja Square', cashback: '4.3%', category: 'Eletrônicos', logo: require('../../assets/images/estabelecimentos/logo6.jpeg') },
    { id: '8', name: 'Veste Bem', cashback: '5.2%', category: 'Roupas', logo: require('../../assets/images/estabelecimentos/logo7.jpg') },
    { id: '9', name: 'Estabelecimento RN', cashback: '1.1%', category: 'Tecnologia', logo: require('../../assets/images/estabelecimentos/logo8.jpeg') },
    { id: '10', name: 'Loja Visualize Mais', cashback: '2.1%', category: 'Tecnologia', logo: require('../../assets/images/estabelecimentos/logo9.png') },
    { id: '11', name: 'Pizzaria Mario', cashback: '3.3%', category: 'Alimentos', logo: require('../../assets/images/estabelecimentos/logo10.png') },
  ];

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <SearchInput previousSearches={previousSearches} />
      <Text style={styles.sectionTitle}>Estabelecimentos</Text>
      <EstablishmentList establishments={establishments} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1D3244',
    marginVertical: 15,
  },
});
