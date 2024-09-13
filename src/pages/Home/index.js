import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSQLiteContext } from 'expo-sqlite';

import ApiSearch from '../ApiSearch';
import BookMark from '../BookMark';
import User from '../User/Index';

import {styles} from "./style";

import TopLogo from '../../components/TopLogo';


const LivroFormulario = ({livro, setLivro, onSave}) => {

    return (
    <View style={styles.formularioCard}>
      <Text style={styles.formularioText}>NOVO LIVRO</Text>

      <TextInput
        style={styles.input}
        placeholder="Titulo do Livro"
        value={livro.titulo}
        onChangeText={(text) => setLivro({...livro, titulo: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição do Livro"
        value={livro.descricao}
        onChangeText={(text) => setLivro({...livro, descricao: text})}
      />
      <TouchableOpacity style={styles.formularioButton} onPress={onSave}>
          <Text style={styles.formularioButtonText}>ADICIONAR</Text>
      </TouchableOpacity>
    </View>
  );
}

function HomeScreen({ route }) {

  const db = useSQLiteContext();
  const [livros, setLivros] = useState([]);
  const [livro, setLivro] = useState({ id: 0, titulo: '' ,  descricao: ''});

  const { user } = route.params || {};
  const userId = user?.id

  const getLivros = async () => {
    try {
      // consultar a tabela
      const todosRegistros = await db.getAllAsync('SELECT * FROM livro WHERE usuario_id = ?', [userId]);
      // armazenar os dados da tabela no hook
      setLivros(todosRegistros);
      console.log(todosRegistros)
    } catch (error) {
      console.log('Erro ao ler os dados dos livros: ', error)
    }
  };

  const confirmarSalvar = () => {
    if (livro.titulo.length === 0 || livro.descricao.length === 0) {
      Alert.alert('Atenção!', 'Por favor, preencha todos os dados!');
    } else {
      Alert.alert('Atenção!', 'Livro salvo com sucesso!')
      adicionarLivro(livro);

      // limpart os campos do formulár
      setLivro({titulo: '', descricao: ''});
    }
  };

  const adicionarLivro = async (novoLivro) => {
    try {
      // montar a query de inserção
      const query = await db.prepareAsync('INSERT INTO livro (titulo, descricao, usuario_id) VALUES (?, ?, ?)')
      await query.executeAsync([novoLivro.titulo, novoLivro.descricao, userId]);
      await getLivros();
      console.log("Livro adicionado");
      getLivros();
    } catch (error) {
      console.log('Erro ao adicionar o livro', error)
      getLivros();
    }
  }

  // obter todos os livros ao abrir o aplicativo
  useEffect(() => {
    if (userId) {
      getLivros();
    }
  }, [userId]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={1}
    >
    <ScrollView>
        <View style={styles.container}>
            <TopLogo/>
            <View style={styles.titleCard}>
                <View>
                    <Text style={styles.firstTitle}>BOOK</Text>
                </View>

                <View style={styles.titleCardInside}>
                    <Text style={styles.secondTitle}>MARK'S</Text>
                    <Text style={styles.thirdTitle}>APP</Text>
                </View>
            </View>

           <LivroFormulario livro={livro} setLivro={setLivro} onSave={confirmarSalvar}/>
            
        </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
}

const Tab = createBottomTabNavigator();

export default function Home({ route }) {

  const user = route.params?.user || {};

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator initialRouteName='Home' tabBarOptions={{
          showLabel: false,
          activeTintColor: '#fff',
          inactiveTintColor: '#FF928B',
          activeBackgroundColor: '#d31212',
          inactiveBackgroundColor: '#820B0B',
        }}>
        <Tab.Screen name="Home" initialParams={{ user }} component={HomeScreen} options={{ headerShown: false, tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home-outline"
                color={color}
                size={size}
              />
            ), }}/>
        <Tab.Screen name="ApiSearch" component={ApiSearch} options={{ headerShown: false, tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="magnify"
                color={color}
                size={size}
              />
            ), }}/>
        <Tab.Screen name="BookMark" component={BookMark} options={{ headerShown: false, tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="book"
                color={color}
                size={size}
              />
            ), }}/>
        <Tab.Screen name="User" initialParams={{ user }} component={User} options={{ headerShown: false, tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ), }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}; 

