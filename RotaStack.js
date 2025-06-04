// APP.js

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// IMPORT STYLES
import { styles } from "./src/styles/styles";

// IMPORT PAGES
import Home from "./src/pages/Home"
import Sobre from "./src/pages/Sobre"

// Fornece o componente que vai envolver nossa navegação (como se fosse um header)
import { NavigationContainer } from '@react-navigation/native';
// Importando as funções da Rota Stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* ^Delimita a navegação é como um header / gerencia para saber em que página nosso app está */}
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        {/* ^Página onde a aplicação ira iniciar / gerencia as telas do projeto*/}
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Sobre' component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// Home.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

// IMPORT STYLES
import { styles } from "../styles/styles";

// Quando importamos o UseNavigation ele nos retorna uma instância de navegação
// Isso nos ermite acessar todos os métodos referentes a navegação ( navigate, goBack )
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text>Página Home</Text>

      <Button title='S O B R E' onPress={() => navigation.navigate("Sobre")} />
    </View>
  );
}

// Sobre,js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

// IMPORT STYLES
import { styles } from "../styles/styles";

// Quando importamos o UseNavigation ele nos retorna uma instância de navegação
// Isso nos ermite acessar todos os métodos referentes a navegação ( navigate, goBack )
import { useNavigation } from '@react-navigation/native';

export default function Sobre() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text>Página Sobre</Text>

      <Button title='H O M E' onPress={() => navigation.goBack()} />
    </View>

  );
}
