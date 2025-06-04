import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// IMPORT STYLES
import { styles } from "./src/styles/styles";


export default function App() {
  return (
    <View style={styles.container}>
      <Text>MEU PRIMEIRO APP COM ROTAS</Text>
    </View>
  );
}
