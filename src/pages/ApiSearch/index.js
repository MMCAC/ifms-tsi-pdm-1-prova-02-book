import React, { useState } from 'react';
import { View, Text, TextInput, ActivityIndicator, FlatList, Image, ScrollView, TouchableOpacity} from 'react-native';

import {styles} from "./style"

import TopLogo from '../../components/TopLogo';

export default function ApiSearch() {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

  const searchBooks = async () => {
    setLoading(true);
    const url = `https://openlibrary.org/search.json?q=${query}`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      setBooks(data.docs.slice(0, 10) || []);
    } catch (error) {
      console.error('Erro ao buscar livros:', error);
    } finally {
      setLoading(false);
    }
  };

  const getCoverUrl = (coverId) => {
    if (coverId) {
      return `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;
    } else {
      return 'https://via.placeholder.com/150';
    }
  };

  return (
    <ScrollView>
        <View style={styles.container}>
            <TopLogo/>
        
        <View style={styles.insideContainer}>
            <Text style={styles.searchText}>PESQUISA</Text>

            <TextInput
            style={styles.input}
            placeholder="Digite o nome do livro"
            value={query}
            onChangeText={setQuery}
            />

            <TouchableOpacity  onPress={searchBooks} style={styles.button}>
                    <Text style={styles.buttonText}>BUSCAR</Text>
            </TouchableOpacity>
        </View>

        

        {loading ? (<ActivityIndicator size="large" color="#820B0B" style={styles.loader} />
        ) : (
        <FlatList
          data={books}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <View style={styles.bookContainer}>
              <Image
                source={{ uri: getCoverUrl(item.cover_i) }}
                style={styles.cover}
              />
              <View style={styles.bookInfo}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.author}>{item.author_name?.join(', ')}</Text>
                <Text style={styles.year}>{item.first_publish_year}</Text>
              </View>
            </View>
          )}
          scrollEnabled={false}
        />
      )}
        </View>
        </ScrollView>
  );
}