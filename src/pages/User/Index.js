import { View, Text, TouchableOpacity, ScrollView, Image  } from 'react-native';
import {styles} from "./style"

import TopLogo from '../../components/TopLogo';

export default function User({navigation}) {
  return (
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
                    <Text>Nome</Text>

                    <View>
                        <Text>Idade</Text>
                        <Text>Sexo</Text>
                    </View>
                    
                </View>
            </View>
            
        </View>
    </ScrollView>
  );
}

{/* <View style={styles.returnCard}>
            <TouchableOpacity onPress={() => navigation.navigate('Principal')}>
                <Text style={styles.returnCardText}>&lt;- Voltar</Text>
            </TouchableOpacity>
      </View> */}