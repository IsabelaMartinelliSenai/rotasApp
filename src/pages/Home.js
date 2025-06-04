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
      <Text>PÁGINA HOME</Text>
    </View>
  );
}
