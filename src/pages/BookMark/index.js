import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, Pressable } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';
import { AntDesign } from '@expo/vector-icons';

import TopLogo from '../../components/TopLogo';

import {styles} from "./style.js"

const LivroBotao = ({livro, excluirLivro, atualizarLivro}) => {
  const [livroSelecionado, setLivroSelecionado] = useState(null);
  const [estaEditando, setEstaEditando] = useState(false);
  const [livroEditado, setLivroEditado] = useState({
    titulo: livro?.titulo || '',
    descricao: livro?.descricao || '',
  });


  // função para confirmar a exclusão de um livro
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
  }


  // função para confirmar edição
  const handleEditar = () => {
    atualizarLivro(livro.id, livroEditado.titulo, livroEditado.email, livroEditado.telefone);
    setEstaEditando(false);
  }


  return (
    <View>
      <Pressable style={styles.livroBotao} onPress={() => setLivroSelecionado(livroSelecionado === livro.id ? null : livro.id)}>
        <Text style={styles.livroTexto}>{livro.id} - {livro.titulo}</Text>
        {livroSelecionado === livro.id && (
          <View style={styles.actions}>
            <AntDesign 
              name='edit'
              size={18}
              color='blue'
              onPress={() => setEstaEditando(true)}
              style={styles.icon}
            />
            <AntDesign 
              name='delete'
              size={18}
              color='red'
              onPress={confirmarExcluir}
              style={styles.icon}
            />
          </View>
        )}
      </Pressable>

      {livroSelecionado === livro.id && !estaEditando && (
        <View style={styles.livroConteudo}>
          <Text>Título: {livro.titulo}</Text>
          <Text>Descrição: {livro.descricao}</Text>
        </View>
      )}

      {livroSelecionado === livro.id && estaEditando && (
        <LivroFormulario livro={livroEditado} setLivro={setLivroEditado} onSave={handleEditar} setMostrarFormulario={setEstaEditando} />
      )}
    </View>
  )
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

  // função para excluir um livro
  const excluirLivro = async (id) => {
    try {
      await db.runAsync('DELETE FROM livro WHERE id = ?', [id]);
      await getLivros();
    } catch (error) {
      console.log('Erro ao excluir o livro: ', error);
    }
  }

  const atualizarLivro = async (livroId, novoLivroTitulo, novoLivroDescricao) => {
    try {
      a = await db.runAsync('UPDATE livro SET titulo = ?, descricao = ? WHERE id = ?', [novoLivroTitulo, novoLivroDescricao, livroId]);
      Alert.alert('Atenção!', 'Livro salvo com sucesso!')
      await getLivros();
    } catch (error) {
      console.log('Erro ao atualizar o livro.', error);
    }
  };

  useEffect(() => {
    getLivros();
  }, []);

  return (
    <ScrollView>
        <View>
            <TopLogo/>

            {livros.length === 0 ? (
              <Text>Não existem livros registrados</Text>
            ) : (
                   <FlatList 
                      data={livros}
                      renderItem={({ item }) => (<LivroBotao livro={item} excluirLivro={excluirLivro} atualizarLivro={atualizarLivro} />)}
                      keyExtractor={(item) => item.id.toString()}
                      scrollEnabled={false}
                   />
            )}
        </View>
    </ScrollView>
  );
}

