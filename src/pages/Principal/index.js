import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';

import {styles} from "./style"

import TopLogo from '../../components/TopLogo';
import { TextInput } from 'react-native';

const db = useSQLiteContext();

const loginUser = (email, senha, callback) => {

  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM usuario WHERE email = ? AND senha = ?',
      [email, senha],
      (_, { rows }) => {
        if (rows.length > 0) {
          callback(null, rows._array[0]);
        } else {
          callback('Usuário ou senha incorretos');
        }
      }
    );
  });
};

export default function Principal({ navigation }) {

  const [usuario, setUsuario] = useState({id: 0, email: '', senha: ''})


  const handleLogin = () => {
    const { email, senha } = usuario;
    loginUser(email, senha, (error, user) => {
      if (error) {
        Alert.alert('Erro', error);
      } else {
        // Redireciona para as telas do Bottom Tabs após o login
        navigation.replace('HomeTabs', { user });
      }
    });
  };


  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={1}
    >
    <ScrollView horizontal={false}>
        <View style={styles.container}>

            <TopLogo />

            <View style={styles.titleCard}>
                <View>
                    <Text style={styles.firstTitle}>BOOK</Text>
                </View>

                <View style={styles.titleCardInside}>
                    <Text style={styles.secondTitle}>MARK'S</Text>
                    <Text style={styles.thirdTitle}>APP</Text>
                </View>
            </View>

            <View style={styles.loginCard}>
                    <View>
                        <Text style={styles.loginText}>LOGIN</Text>
                    </View>
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => setUsuario({...usuario, email: text})}
                            value={usuario.email}
                            placeholder="E-mail"
                        />

                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => setUsuario({...usuario, senha: text})}
                            value={usuario.senha}
                            placeholder="Senha"
                            secureTextEntry
                        />
                <View>
                    
                </View>

                <View style={styles.login}>
                    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                        <Text style={styles.loginButtonText}>ENTRAR</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* onPress={() => navigation.navigate('Home')}> */}
        

            <View style={styles.singUpCard}>
                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} style={styles.singUpButton}>
                    <Text style={styles.signUpText}>CADASTRE-SE</Text>
                </TouchableOpacity>
            </View>
            
        

        </View>
    </ScrollView>

    </KeyboardAvoidingView>
  );
}