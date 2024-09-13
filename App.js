import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Login from './telas/Login';

export default function App(){
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <Login />
    </SafeAreaView>
  );
}

