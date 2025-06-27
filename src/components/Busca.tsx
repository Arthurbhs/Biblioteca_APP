// components/SearchBar.tsx
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function SearchBar() {
  const [showInput, setShowInput] = useState(false);
  const [termo, setTermo] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (termo.trim()) {
      router.push(`/Busca/${encodeURIComponent(termo.trim())}`);
      setShowInput(false);
      setTermo('');
    }
  };

  return (
    <View style={styles.container}>
      {showInput ? (
        <TextInput
          style={styles.input}
          value={termo}
          onChangeText={setTermo}
          placeholder="Buscar livros..."
          returnKeyType="search"
          onSubmitEditing={handleSearch}
          autoFocus
        />
      ) : (
        <TouchableOpacity onPress={() => setShowInput(true)}>
          <Ionicons name="search" size={24} color="#333" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 16,
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    width: 200,
  },
});
