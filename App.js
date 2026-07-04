import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import SessionScreen from './screens/SessionScreen';
import { COLORS } from './constants/theme.js';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" /> 
      <SessionScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});