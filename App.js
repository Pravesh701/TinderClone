import React from 'react';
import { View, StyleSheet } from 'react-native';
import TinderProfile from './src/screens/tinderProfile';

const App = () => {
  return (
    <View style={styles.container}>
      <TinderProfile />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default App;
