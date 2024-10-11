import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

interface EstablishmentItemProps {
  image: any;
  name: string;
  cashback: string;
  category: string;
}

const EstablishmentItem: React.FC<EstablishmentItemProps> = ({ image, name, cashback, category }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={image} style={styles.logo} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.cashback}>{cashback} de Cashback</Text>
        <Text style={styles.category}>{category}</Text>
      </View>
      <AntDesign name="right" size={24} color="#1D3244" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#1D3244',
  },
  logo: {
    width: 125,
    height: 75,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#C0C1C3',    
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1D3244',
  },
  cashback: {
    fontSize: 12,
    color: '#1D3244',
  },
  category: {
    fontSize: 10,
    color: '#999',
  },
});

export default EstablishmentItem;
