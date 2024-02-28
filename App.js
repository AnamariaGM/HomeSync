import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

import Navigation from "./app/navigation";

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  root:{
    flex:1,
    backgroundColor: '#fce8ee',
  }
})

export default App;