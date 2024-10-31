import React from 'react';
import { NativeBaseProvider, Box, VStack, Button, Center, Text, Input, Link } from 'native-base';
import { StyleSheet, View, ImageBackground, Dimensions } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <ImageBackground
        source={require('../../assets/background2.png')} 
        style={styles.background}
        imageStyle={{ resizeMode: 'cover' }} // Para garantir que a imagem cubra toda a área
      >
        <View style={styles.overlay} />

        <Center flex={1} px={4}>
          <Text style={styles.title}>HUDSON STORYTELLING</Text>
          <Text style={styles.subtitle}>Gerador de apresentação</Text>

          <Box style={styles.loginContainer}>
            <Text style={styles.loginTitle}>Login</Text>
            <VStack space={4}>
              <Input placeholder="Digite seu email" variant="filled" style={styles.input} />
              <Input placeholder="Digite sua senha" variant="filled" secureTextEntry={true} style={styles.input} />
              <Link href="#" style={styles.forgotPassword}>Esqueci a senha</Link>
              <Button
                style={styles.primaryButton}
                onPress={() => navigation.navigate('Sobre')}
              >
                Entrar
              </Button>
            </VStack>
          </Box>
        </Center>
      </ImageBackground>
    </NativeBaseProvider>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  background: {
    width, // Largura completa da tela
    height, // Altura completa da tela
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Escurecimento para contraste do texto
  },
  title: {
    fontSize: 32,
    color: '#BE94F3',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#BE94F3',
    textAlign: 'center',
    marginBottom: 20,
  },
  loginContainer: {
    width: '90%',
    maxWidth: 400,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#E9D7F9',
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
  },
  forgotPassword: {
    textAlign: 'center',
    color: '#8B7A7A',
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: '#C592F5',
    borderColor: '#7B0AE6',
    borderWidth: 2,
    borderRadius: 5,
    color: 'black',
  },
});

export default LoginScreen;
