import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import { CheckBox } from 'react-native-elements';

  {/*sim, eu tinha bastante tempo disponível */}
const CustomButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  
  const handleLogin = () => {
    console.log('Login com:', { email, password, rememberMe });
  };

  return (
    <View style={styles.main}>
      <StatusBar backgroundColor='white' barStyle="dark-content" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>

            {/*A call de colocar o KeyboardAvoid só complicou minha vida kkkkkk */}

            <Image source={require('../assets/logo.png')} style={styles.img} />

            <View style={styles.boxbranca}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Olá,</Text>
                <Text style={styles.title}>Bem-vindo de volta!</Text>
              </View>

              {/* Usuario*/}
              <Text style={styles.label}>Usuário ou e-mail</Text>
              <TextInput
                placeholder="username@gmail.com"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
                accessibilityLabel="Campo de e-mail"
              />

              {/* Senhra*/}
              <Text style={styles.label}>Senha</Text>
              <TextInput
                placeholder="*****"
                value={password}
                onChangeText={setPassword}
                style={styles.input}
                secureTextEntry
                accessibilityLabel="Campo de senha"
              />

              {/* Checkbox*/}
              <View style={styles.checkboxContainer}>
                <CheckBox
                  checked={rememberMe}
                  onPress={() => setRememberMe(!rememberMe)}
                  containerStyle={styles.checkbox}
                />
                <Text style={styles.labelCheckbox}>Lembrar Senha</Text>
                
                <TouchableOpacity>
                <Text style={styles.labelCheckbox}>Esqueceu a senha?</Text>
              </TouchableOpacity>
              </View>

              <TouchableOpacity >
              <Text style={styles.teste} >Já possui uma conta?</Text>
              </TouchableOpacity>


              
              {/* A porcaria do botão (como vc pode ver, eu sou um animal quando o assunto é botão) */}
              <CustomButton title="Entrar" onPress={handleLogin} />
            </View>

            <Text style={styles.log}>ou logar com:</Text>

            {/* A parte dos incones*/}
            <View style={styles.contenticones}>
            <TouchableOpacity>
            <Image source={require('../assets/facebook.png')} style={styles.icones}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={require('../assets/google-plus.png')} style={styles.icones}/>
            </TouchableOpacity>
            </View>

          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#5B0AC4',
  },
  scrollContent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  content: {
    alignItems: 'center',
  },
  img: {
    marginTop: 70,
    width: 80,
    height: 80,
    marginBottom: 40,
  },
  boxbranca: {
    backgroundColor: '#F1E6FF',
    width: 300,
    padding: 20,
    borderRadius: 25,
    elevation: 4,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    color: '#5B0AC4',
    fontSize: 26,
    fontWeight: 'bold',
  },
  label: {
    marginBottom: 5,
    color: '#5B0AC4',
  },
  input: {
    height: 50,
    marginBottom: 12,
    borderRadius: 13,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    //marginBottom: 1,
  },
  checkbox: {
    padding: 0,
    marginRight: 2,
    borderColor: '#5B0AC4',
  },
  labelCheckbox: {
    color: '#5B0AC4',
    fontSize: 12,
    paddingEnd:33,
  },
  button: {
    backgroundColor: '#5B0AC4',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  log: {
    textAlign: 'center',
    color: 'white',
    marginTop:10, 
},
  contenticones: {
    gap: 20,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop:15,
  },
  icones: {
    width:50,
    height:50,
    elevation: 4,
  },
  teste:{
    color: '#5B0AC4',
    fontSize: 12,
    paddingStart:135,
    marginBottom:10,
  }
});
