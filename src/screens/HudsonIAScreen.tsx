import React from 'react';
import { View, Text, ScrollView, StyleSheet, Button, TextInput, TouchableOpacity, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';

type HudsonIAScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'HudsonIA'
>;

const HudsonIAScreen = () => {
  const navigation = useNavigation<HudsonIAScreenNavigationProp>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Container para os botões de navegação */}
      <View style={styles.topButtonsContainer}>
        <TouchableOpacity
          style={styles.topButton}
          onPress={() => navigation.navigate('Suporte')}
        >
          <Text style={styles.topButtonText}>Suporte</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.topButton}
          onPress={() => navigation.navigate('Perguntas')}
        >
          <Text style={styles.topButtonText}>Perguntas</Text>
        </TouchableOpacity>
      </View>

      {/* Restante do conteúdo da tela */}
      <View style={styles.header}>
        <Text style={styles.title}>HUDSON STORYTELLING</Text>
      </View>

      <View style={styles.assistantContainer}>
        <Text style={styles.assistantTitle}>Assistente Virtual</Text>
        <TextInput
          style={styles.input}
          placeholder="Como o Hudson pode te ajudar"
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Image source={require('../../assets/doc.png')} style={styles.icon} />
          <Text>Documento</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={require('../../assets/foto.png')} style={styles.icon} />
          <Text>Imagem</Text>
        </TouchableOpacity>
      </View>

      <Button title="GERAR" onPress={() => console.log("Geração iniciada")} color="#9a55e5" />
      <View style={styles.outputContainer}>
        <Text>Resultado do Gemini IA</Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  topButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 40,
    alignItems: 'center'
  },
  topButton: {
    padding: 10,
    backgroundColor: '#5B0EA8',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  topButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5B0EA8',
    textAlign: 'center',
  },
  assistantContainer: {
    width: '100%',
    marginBottom: 20,
  },
  assistantTitle: {
    fontSize: 18,
    color: '#5B0EA8',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 50,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#E9D7F9',
    color: '#333',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  button: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
  },
  icon: {
    width: 40,
    height: 40,
  },
  outputContainer: {
    marginTop: 20,
    width: '90%',
    padding: 20,
    backgroundColor: '#f8f9fa',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
  },
});

export default HudsonIAScreen;
