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
// Importando as funções da Rota Drawer
import { createDrawerNavigator } from '@react-navigation/drawer';

// IMPORT ICONS
import FontAwesome from "@expo/vector-icons/FontAwesome"
import Feather from "@expo/vector-icons/Feather"

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      {/* ^Delimita a navegação é como um header / gerencia para saber em que página nosso app está */}
      <Drawer.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerTitle: "",
          drawerStyle: {
            backgroundColor: "#dceaf7",
            elevation: 0,
            shadowOpacity: 0
          },
          drawerActiveBackgroundColor: "#20639b",
          drawerActiveTintColor: "#dceaf7",
          drawerInactiveBackgroundColor: "#dceaf7",
          drawerInactiveTintColor: "#20639b"
        }}>
        {/* ^Página onde a aplicação ira iniciar / gerencia as telas do projeto*/}
        <Drawer.Screen name='Home' component={Home}
          options={{
            drawerIcon: ({ color, size }) => {
              return <FontAwesome name="home" size={size} color={color} />
            },
            headerShown: false
          }} />
        <Drawer.Screen name='Sobre' component={Sobre}
          options={{
            drawerIcon: ({ color, size }) => {
              return <Feather name="message-circle" size={size} color={color} />
            },
            headerShown: false
          }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


// Home.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// IMPORT STYLES
import { styles } from "../styles/styles";

// Quando importamos o UseNavigation ele nos retorna uma instância de navegação
// Isso nos ermite acessar todos os métodos referentes a navegação ( navigate, goBack )
import { useNavigation } from '@react-navigation/native';

import AntDesign from "@expo/vector-icons/AntDesign"

export default function Home() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          width: 48,
          height: 48,
          borderRadius: 48,
          backgroundColor: "#20639b",
          justifyContent: "center",
          alignItems: 'center',
          position: 'absolute',
          top: 20,
          left: 20
        }}
        onPress={() => navigation.openDrawer()}
      >
        <AntDesign name="menuunfold" size={25} color={"#dceaf7"}></AntDesign>
      </TouchableOpacity>
      <Text>PÁGINA HOME</Text>
    </View>
  );
}

// Sobre.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

// IMPORT STYLES
import { styles } from "../styles/styles";

// Quando importamos o UseNavigation ele nos retorna uma instância de navegação
// Isso nos ermite acessar todos os métodos referentes a navegação ( navigate, goBack )
import { useNavigation } from '@react-navigation/native';

import AntDesign from "@expo/vector-icons/AntDesign"

export default function Sobre() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          width: 48,
          height: 48,
          borderRadius: 48,
          backgroundColor: "#20639b",
          justifyContent: "center",
          alignItems: 'center',
          position: 'absolute',
          top: 20,
          left: 20
        }}
        onPress={() => navigation.openDrawer()}
      >
        <AntDesign name="menuunfold" size={25} color={"#dceaf7"}></AntDesign>
      </TouchableOpacity>
      <Text>PÁGINA SOBRE</Text>
    </View>

  );
}
