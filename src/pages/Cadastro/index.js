import * as React from 'react';
import {useState} from "react";
import { Text, View, Alert,  StyleSheet, ScrollView, TextInput, TouchableOpacity,KeyboardAvoidingView, Platform  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import {styles} from "./style.js"

import TopLogo from '../../components/TopLogo';

const UsuarioFormulario = ({usuario, setUsuario, onSave}) => {

}



export default function Cadastro({navigation}) {

    const [email, setEmail] = useState('');
    const [emailConf, setEmailConf] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConf, setSenhaConf] = useState('');
    const [nome, setNome] = useState('');


    // const db = useSQLiteContext();
    // const [usuarios, setUsuarios] = useState([]);

    // // CREATE / INSERT
    // const confirmarSalvar = (nome,  email, senha) => {

    //     const usuario = {
    //         nome,
    //         email,
    //         senha
    //     };
    //     if (usuario.nome.length === 0 || usuario.email.length === 0 || usuario.senha.length === 0) {
    //     Alert.alert('Atenção!', 'Por favor, preencha todos os dados!');
    //     } else {
    //     Alert.alert('Atenção!', 'Usuário salvo com sucesso!')
    //     adicionarUsuario(usuario);

    //     // limpart os campos do formulár

    //     }
    // }

    // // função para adicionar um usuário
    // const adicionarUsuario = async (novoUsuario) => {
    //     try {
    //     // montar a query de inserção
    //     const query = await db.prepareAsync('INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)')
    //     await query.executeAsync([novoUsuario.nome, novoUsuario.email, novoUsuario.telefone]);
    //     await getUsuarios();
    //     } catch (error) {
    //     console.log('Erro ao adicionar o usuário', error)
    //     }
    // }


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


                <View style={styles.loginCard}>
                    <View>
                        <Text style={styles.loginText}>INFORME SEUS DADOS</Text>
                    </View>
                        <TextInput
                            style={styles.input}
                            onChangeText={setNome}
                            value={nome}
                            placeholder="Informe o seu nome"
                        />

                        <TextInput
                            style={styles.input}
                            onChangeText={setEmail}
                            value={email}
                            placeholder="Informe o seu email"
                        />

                        <TextInput
                            style={styles.input}
                            onChangeText={setSenha}
                            value={senha}
                            placeholder="Informe a sua senha"
                        />
   
                <View>
                    
                </View>

                <View style={styles.login}>
                    <TouchableOpacity style={styles.loginButton} onPress={() => confirmarSalvar(nome, email, senha)}>
                        <Text style={styles.loginButtonText}>CADASTRAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
        </ScrollView>
    </KeyboardAvoidingView>
    )
}