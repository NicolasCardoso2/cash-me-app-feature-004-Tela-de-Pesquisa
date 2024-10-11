import React from 'react';
import { FlatList } from 'react-native';
import EstablishmentItem from './EstablishmentItem';

interface Establishment {
  id: string;
  name: string;
  cashback: string;
  category: string;
  logo: any;
}

interface EstablishmentListProps {
  establishments: Establishment[];
}

const EstablishmentList: React.FC<EstablishmentListProps> = ({ establishments }) => {
  return (
    <FlatList
      data={establishments}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <EstablishmentItem
          name={item.name}
          cashback={item.cashback}
          category={item.category}
          image={item.logo}
        />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default EstablishmentList;
