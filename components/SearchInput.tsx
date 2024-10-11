import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, FlatList, Keyboard } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

interface SearchInputProps {
  previousSearches: Array<{ id: string; title: string }>;
}

const SearchInput: React.FC<SearchInputProps> = ({ previousSearches }) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <View>
      <View style={styles.container}>
      <AntDesign name="search1" size={24} color="#1D3244" />
        <TextInput
          placeholder="Pesquisar Loja"
          style={styles.input}
        />
        <TouchableOpacity>
        <AntDesign name="close" size={24} color="#1D3244" />
        </TouchableOpacity>
      </View>
      
      {isKeyboardVisible && (
        <FlatList
          data={previousSearches}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.previousSearchItem}>
              <AntDesign name="search1" size={20} color="#1D3244" />
              <Text style={styles.previousSearchText}>{item.title}</Text>
              <AntDesign name="arrowright" size={20} color="#1D3244" />
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderColor: '#1D3244',
    borderWidth: 1,
    borderRadius: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  previousSearchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#1D3244',
  },
  previousSearchText: {
    flex: 1,  
    marginLeft: 10,
  },
});

export default SearchInput;
