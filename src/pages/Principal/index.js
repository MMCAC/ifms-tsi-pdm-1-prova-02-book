import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import {styles} from "./style"

import TopLogo from '../../components/TopLogo';
import { TextInput } from 'react-native';



export default function Principal({ navigation }) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

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
                            onChangeText={setEmail}
                            value={email}
                            placeholder="E-mail"
                        />

                        <TextInput
                            style={styles.input}
                            onChangeText={setSenha}
                            value={senha}
                            placeholder="Senha"
                        />
                <View>
                    
                </View>

                <View style={styles.login}>
                    <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.loginButtonText}>ENTRAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        

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