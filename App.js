/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
//import your components 
import PokeList from './components/PokeList';
//Export default the stateless component 
const App = () => {
  return (
    <ScrollView style={styles.container}>
      <PokeList/>
    </ScrollView>
  )
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  pokeListHeader: {
    fontSize: 20,
    color: '#fff'
  }
});