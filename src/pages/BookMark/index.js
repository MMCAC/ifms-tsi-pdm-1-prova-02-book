import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, Pressable, Alert, TextInput, Button } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';
import { AntDesign } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';

import TopLogo from '../../components/TopLogo';

import {styles} from "./style.js"

const LivroBotao = ({livro, excluirLivro, atualizarLivro}) => {
  const [livroSelecionado, setLivroSelecionado] = useState(null);
  const [estaEditando, setEstaEditando] = useState(false);
  const [livroEditado, setLivroEditado] = useState({
    titulo: livro?.titulo || '',
    descricao: livro?.descricao || '',
  });

  // Função para confirmar a exclusão de um livro
  const confirmarExcluir = () => {
    Alert.alert(
      "Atenção!",
      'Deseja excluir o livro?',
      [
        { text: 'Não', onPress: () => { }, style: 'cancel' },
        { text: 'Sim', onPress: () => excluirLivro(livro.id) },
      ],
      { cancelable: true }
    );
  };

  // Função para salvar as edições do livro
  const handleSalvar = () => {
    atualizarLivro(livro.id, livroEditado.titulo, livroEditado.descricao);
    setEstaEditando(false);
    setLivroSelecionado(null); // Fecha a edição após salvar
  };

  return (
    <View>
      <Pressable
        style={styles.livroBotao}
        onPress={() => setLivroSelecionado(livroSelecionado === livro.id ? null : livro.id)}
      >
        <Text style={styles.livroTexto}>{livro.id} - {livro.titulo}</Text>
        {livroSelecionado === livro.id && !estaEditando && (
          <View style={styles.actions}>
            <AntDesign 
              name='edit'
              size={24}
              color='blue'
              onPress={() => setEstaEditando(true)}
              style={styles.icon}
            />
            <AntDesign 
              name='delete'
              size={24}
              color='red'
              onPress={confirmarExcluir}
              style={styles.icon}
            />
          </View>
        )}
      </Pressable>

      {/* Exibir detalhes do livro quando selecionado */}
      {livroSelecionado === livro.id && !estaEditando && (
        <View style={styles.livroConteudo}>
          <Text style={styles.livroItem}>Título: {livro.titulo}</Text>
          <Text style={styles.livroItem}>Descrição: {livro.descricao}</Text>
        </View>
      )}

      {/* Exibir formulário de edição quando estiver editando */}
      {livroSelecionado === livro.id && estaEditando && (
        <View style={styles.livroConteudo}>
          <TextInput
            style={styles.input}
            value={livroEditado.titulo}
            onChangeText={(text) => setLivroEditado({ ...livroEditado, titulo: text })}
            placeholder="Título"
          />
          <TextInput
            style={styles.input}
            value={livroEditado.descricao}
            onChangeText={(text) => setLivroEditado({ ...livroEditado, descricao: text })}
            placeholder="Descrição"
          />
          <View style={styles.alterarRow}>
            <Button title="Salvar" onPress={handleSalvar} />
            <Button title="Cancelar" onPress={() => setEstaEditando(false)} />
          </View>
          
        </View>
      )}
    </View>
  );
};

export default function BookMark() {
  const db = useSQLiteContext();  
  const [livros, setLivros] = useState([]);

  const getLivros = async () => {
    try {
      const resultado = await db.getAllAsync('SELECT * FROM livro');
      setLivros(resultado);
      console.log(resultado);
    } catch (error) {
      console.log('Erro ao obter os livros', error);
    }
  };

  const excluirLivro = async (id) => {
    try {
      await db.runAsync('DELETE FROM livro WHERE id = ?', [id]);
      await getLivros();
    } catch (error) {
      console.log('Erro ao excluir o livro: ', error);
    }
  };

  const atualizarLivro = async (livroId, novoLivroTitulo, novoLivroDescricao) => {
    try {
      await db.runAsync('UPDATE livro SET titulo = ?, descricao = ? WHERE id = ?', [novoLivroTitulo, novoLivroDescricao, livroId]);
      Alert.alert('Atenção!', 'Livro salvo com sucesso!');
      await getLivros();
    } catch (error) {
      console.log('Erro ao atualizar o livro.', error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getLivros();
    }, [])
  );

  return (
    <ScrollView>
      <View>
        <TopLogo />

        {livros.length === 0 ? (
          <View style={styles.empty}>
            <Text style={styles.emptyText}>Não existem livros registrados!</Text>
          </View>
        ) : (
          <FlatList 
            data={livros}
            renderItem={({ item }) => (
              <LivroBotao
                livro={item}
                excluirLivro={excluirLivro}
                atualizarLivro={atualizarLivro}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
          />
        )}
      </View>
    </ScrollView>
  );
}
