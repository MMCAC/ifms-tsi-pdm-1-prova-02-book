import { View, Text, TouchableOpacity, ScrollView, Image, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import {styles} from "./style"

import TopLogo from '../../components/TopLogo';
import { useState } from 'react';



export default function User({route}) {
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');
  const [bio, setBio] =useState('')

  const { user } = route.params || {};
  const userNome = user?.nome

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={1}
    >
    <ScrollView>
        <View style={styles.container}>
            <View style={styles.topSection}>
                <TopLogo/>
            </View>

            <View style={styles.bottomSection}>
                <View style={styles.iconCard}>
                    <Image source={require('../../../assets/user.png')} style={styles.imagem} />
                </View>

                <View style={styles.infoCard}>
                    <Text style={styles.tituloDados}>DADOS PESSOAIS</Text>

                    <View style={styles.infoName}><Text style={styles.infoText}>{userNome}</Text></View>
                    

                    <View style={styles.insideInfo}>
                        <View style={styles.info}>
                            <TextInput
                                style={styles.inputD}
                                placeholder="Idade"
                                value={idade}
                                onChangeText= {(text) => setIdade(text)}
                                keyboardType='numeric'
                                maxLength={2}
                            />
                        </View>

                        <View style={styles.info}>
                            <TextInput
                                style={styles.inputD}
                                placeholder="Sexo"
                                value={sexo}
                                onChangeText= {(text) => setSexo(text)}
                                maxLength={6}
                            /></View>                                      
                    </View>

                        <View style={styles.bioView}>
                            <TextInput
                                style={styles.input}
                                placeholder="Escreva a sua bio"
                                value={bio}
                                onChangeText= {(text) => setBio(text)}
                            />
                        </View>
                </View>

                <View style={styles.returnCard}>
                    <TouchableOpacity onPress={() => navigation.navigate('Principal')}>
                        <Text style={styles.returnCardText}>&lt;- Sair</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
}

{/* <View style={styles.returnCard}>
            <TouchableOpacity onPress={() => navigation.navigate('Principal')}>
                <Text style={styles.returnCardText}>&lt;- Voltar</Text>
            </TouchableOpacity>
      </View> */}