import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// IMPORT STYLES
import { styles } from "./src/styles/styles";

// IMPORT PAGES
import Home from "./src/pages/Home"
import Sobre from "./src/pages/Sobre"

// Fornece o componente que vai envolver nossa navegação (como se fosse um header)
import { NavigationContainer } from '@react-navigation/native';
// Importando as funções da Rota Bottom Tab
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// IMPORT ICONS
import FontAwesome from "@expo/vector-icons/FontAwesome"
import Feather from "@expo/vector-icons/Feather"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* ^Delimita a navegação é como um header / gerencia para saber em que página nosso app está */}
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
          tabBarActiveBackgroundColor: 'purple',
          tabBarActiveTintColor: 'black',
          tabBarStyle: {
            backgroundColor: "purple",
            height: 50,
            position: "absolute",
            bottom: 50,
            borderTopEndRadius: 15,
            borderTopColor: "transparent",
            padding: 10,
            shadowColor: "purple",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.30,
            shadowRadius: 4.65,
            elevation: 8,
            width: "80%",
            left: "10%",
            marginHorizontal: "10%"
          }
        }} >
        {/* ^Página onde a aplicação ira iniciar / gerencia as telas do projeto*/}
        <Tab.Screen name='Home' component={Home}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <FontAwesome name="home" size={size} color={color} />
            },
            headerShown: false,
            title: ''
          }} />
        <Tab.Screen name='Sobre' component={Sobre}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name="message-circle" size={size} color={color} />
            },
            headerShown: false,
            title: ''
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
