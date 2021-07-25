import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native';

import { 
  AppearanceProvider, 
  Appearance,
} from 'react-native-appearance';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Sound Board</Text>
    </SafeAreaView>
  );
}

export default () => (
  <AppearanceProvider>
    <App />
  </AppearanceProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: Appearance.getColorScheme() === 'dark' ? '#000' : '#fff'
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: Appearance.getColorScheme() === 'dark' ? '#fff': '#000'
  }
});