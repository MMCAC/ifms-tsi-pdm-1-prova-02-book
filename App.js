import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';

import Principal from "./src/pages/Principal/index"
import Cadastro from "./src/pages/Cadastro/index"
import Home from './src/pages/Home';
import ApiSearch from './src/pages/ApiSearch';
import BookMark from './src/pages/BookMark';
import User from './src/pages/User/Index';

const Stack = createNativeStackNavigator();

const iniciarBancoDeDados = async (db) => {
  try {
    await db.execAsync(`
      PRAGMA journal_mode = WAL;
      DROP TABLE usuario;
      CREATE TABLE IF NOT EXISTS usuario (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        email TEXT,
        senha TEXT
      );

      DROP TABLE livro;
      CREATE TABLE IF NOT EXISTS livro (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT,
        descricao TEXT,
        usuario_id INTEGER,
        FOREIGN KEY(usuario_id) REFERENCES usuario(id)
      );
    `)
    console.log('Banco de Dados inicializado')
  } catch (error) {
    console.log('Erro ao iniciar o Banco de Dados. ', error);
  }
}

export default function App() {
  return (
    <SQLiteProvider databaseName='bancoUsuario.db' onInit={iniciarBancoDeDados}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Principal">
          <Stack.Screen
            name="Principal"
            component={Principal}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ApiSearch"
            component={ApiSearch}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BookMark"
            component={BookMark}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="User"
            component={User}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SQLiteProvider>
  );
}
