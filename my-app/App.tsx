import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as SQLite from 'expo-sqlite'; 
import {useState, useEffect} from 'react';
//import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';
import * as DocumentPicker from 'expo-document-picker';
import { Separator } from './components/Separator';

// expo add expo-sqlite *
// expo add expo-file-system *
// expo add expo-document-picker *
// expo add expo-sharing
// expo add expo-dev-client

export default function App() {

  return (
    <View style={styles.container}>
      <Text> Hello world </Text>
      <Separator/>
      <StatusBar style="auto" />
    </View>
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
