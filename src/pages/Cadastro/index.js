import * as React from 'react';
import {useState, useEffect} from "react";
import { Text, View, Alert,  StyleSheet, ScrollView, TextInput, TouchableOpacity,KeyboardAvoidingView, Platform  } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';

import {styles} from "./style.js"

import TopLogo from '../../components/TopLogo';

const UsuarioFormulario = ({usuario, setUsuario, onSave}) => {
    return(
            <View style={styles.loginCard}>
                    <View>
                        <Text style={styles.loginText}>INFORME SEUS DADOS</Text>
                    </View>
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => setUsuario({...usuario, nome: text})}
                            value={usuario.nome}
                            placeholder="Informe o seu nome"
                        />

                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => setUsuario({...usuario, email: text})}
                            value={usuario.email}
                            placeholder="Informe o seu email"
                        />

                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => setUsuario({...usuario, senha: text})}
                            value={usuario.senha}
                            placeholder="Informe a sua senha"
                        />
                    <View>
                    
                </View>

                <View style={styles.login}>
                    <TouchableOpacity style={styles.loginButton} onPress={onSave}>
                        <Text style={styles.loginButtonText}>CADASTRAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
    )
}

export default function Cadastro({navigation}) {
    const db = useSQLiteContext();
    const [usuarios, setUsuarios] = useState([]);
    const [usuario, setUsuario] = useState({ id: 0, nome: '', email: '', senha: '' });

    const getUsuarios = async () => {
    try {
      // consultar a tabela
      const todosRegistros = await db.getAllAsync('SELECT * FROM usuario');
      // armazenar os dados da tabela no hook
      setUsuarios(todosRegistros);
    } catch (error) {
      console.log('Erro ao ler os dados dos usuários: ', error)
    }
    };
    
   const confirmarSalvar = () => {
    if (usuario.nome.length === 0 || usuario.email.length === 0 || usuario.senha === 0) {
      Alert.alert('Atenção!', 'Por favor, preencha todos os dados!');
    } else {
      Alert.alert('Atenção!', 'Usuário salvo com sucesso!')
      adicionarUsuario(usuario);

      // limpar os campos do formulário
      setUsuario({nome: '', email: '', senha: ''});
    }
    };

    const adicionarUsuario = async (novoUsuario) => {
    try {
      // montar a query de inserção
      const query = await db.prepareAsync('INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)')
      await query.executeAsync([novoUsuario.nome, novoUsuario.email, novoUsuario.senha]);
      await getUsuarios();
    } catch (error) {
      console.log('Erro ao adicionar o usuário', error)
    }
    }

    useEffect(() => {
        getUsuarios();
  }, []);

    return(
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={1}
    >
        <ScrollView>
            <View style={styles.container}>
                <TopLogo />

                <View style={styles.returnCard}>
                    <TouchableOpacity onPress={() => navigation.navigate('Principal')}>
                        <Text style={styles.returnCardText}>&lt;- Voltar</Text>
                    </TouchableOpacity>
                </View>

                <UsuarioFormulario usuario={usuario} setUsuario={setUsuario} onSave={confirmarSalvar}/>
            </View>
        </ScrollView>
    </KeyboardAvoidingView>
    )
}