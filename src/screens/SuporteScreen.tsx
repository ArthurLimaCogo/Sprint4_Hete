import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

const { width, height } = Dimensions.get('window');

type SupportScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Suporte'
>;

const SupportScreen = () => {
  const navigation = useNavigation<SupportScreenNavigationProp>();
  
  // Estado para os campos de entrada
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [tipo, setTipo] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleFormSubmit = () => {
    // Aqui você pode adicionar a lógica de envio do formulário, como integração com uma API.
    console.log('Formulário enviado:', { nome, email, tipo, mensagem });
  };

  return (
    <ImageBackground
      source={require('../../assets/background.png')} // Substitua pelo caminho correto da sua imagem de fundo
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.logo}>MAGNUS</Text>
        <Text style={styles.title}>Envie suas dúvidas ou reporte erros</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Tipo de Pergunta (Erro, Dúvida, Outros)"
          value={tipo}
          onChangeText={setTipo}
        />

        <TextInput
          style={[styles.input, styles.textarea]}
          placeholder="Escreva sua mensagem"
          value={mensagem}
          onChangeText={setMensagem}
          multiline
          numberOfLines={5}
        />

        <View style={styles.buttonContainer}>
          <Button title="Enviar" onPress={handleFormSubmit} color="#5B0EA8" />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('HudsonIA')}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>Voltar para a Página Inicial</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  textarea: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    width: '50%',
    marginVertical: 10,
    backgroundColor: '#5B0EA8',
    borderRadius: 8,
    alignItems: 'center'
  },
  backButton: {
    width: '50%',
    paddingVertical: 10,
    backgroundColor: '#5B0EA8',
    borderRadius: 8,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SupportScreen;
