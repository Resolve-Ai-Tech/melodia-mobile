import React, { useState } from 'react';
import { 
  View, 
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  StatusBar,
  ScrollView,
} from 'react-native';

export default function App() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.main}>
      <StatusBar backgroundColor="white" barStyle="light-content" />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      > 
        <Image source={require('./assets/logo.png')} style={styles.img}/> 

        <View style={styles.boxBranca}>
          <View style={styles.content}>
            <Text style={styles.title}>Olá,</Text>
            <Text style={styles.title}>Cadastre-se agora!</Text>
          </View>

          {/* Usuario*/}
          <Text style={styles.label}>Nome:</Text>
          <TextInput
            underlineColorAndroid="transparent"
            placeholder='Digite seu nome'
            value={nome}
            onChangeText={setNome}
            style={styles.input}
            keyboardType="default"
            autoCapitalize="words"
          />

           {/* Email*/}         
          <Text style={styles.label}>E-mail:</Text>
          <TextInput
            underlineColorAndroid="transparent"
            placeholder="usuario@gmail.com"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* Senha*/}    
          <Text style={styles.label}>Senha:</Text>
          <TextInput
            underlineColorAndroid="transparent"
            placeholder="Digite sua senha"
            value={senha}
            onChangeText={setSenha}
            style={styles.input}
            secureTextEntry
          />

          {/* Clicar para fazer o login*/}
          <TouchableOpacity>
            <Text style={styles.textoLogin}>Já tem conta? Clique aqui para fazer login</Text>
          </TouchableOpacity>

          {/* Aprendi a fazer um botão sem perder tempo*/}
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#5B0AC4',
  },
  img:{
    marginTop:50,
    width:80,
    height:80,
    marginBottom:20,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  boxBranca: {
    backgroundColor: '#F1E6FF',
    width: 300,
    padding: 20,
    borderRadius: 25,
    elevation: 4,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    color: '#5B0AC4',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  label: {
    color: '#5B0AC4',
    marginBottom: 5,
    marginTop: 8,
    fontWeight: '600',
  },
  input: {
    height: 50,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    fontSize: 16,
  },
  textoLogin: {
    fontSize: 10,
    marginStart:70,
    textAlign: 'center',
    color: '#5B0AC4',
    marginBottom: 12,
  },
  botao: {
    backgroundColor: '#5B0AC4',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  textoBotao: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
