import { inspect } from 'util';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as mod from '@sounisi5011/encrypted-archive';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text>mod: {inspect(mod)}</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
