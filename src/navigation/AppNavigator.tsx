import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SobreScreen from '../screens/SobreScreen';
import LoginScreen from '../screens/LoginScreen';
import SuporteScreen from '../screens/SuporteScreen';
import PerguntasScreen from '../screens/PerguntasScreen';
import HudsonIAScreen from '../screens/HudsonIAScreen';

// Definindo o RootStackParamList com todas as telas do projeto
export type RootStackParamList = {
  Sobre: undefined;
  Login: undefined;
  Suporte: undefined;
  Perguntas: undefined;
  HudsonIA: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        name="Sobre" 
        component={SobreScreen} 
        options={{ title: 'Tela Inicial' }} // Título personalizável
      />
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ title: 'Acesse sua conta' }} // Título personalizável
      />
      <Stack.Screen 
        name="HudsonIA" 
        component={HudsonIAScreen} 
        options={{ title: 'Cadastrar' }} // Título personalizável
      />
      <Stack.Screen 
        name="Perguntas" 
        component={PerguntasScreen} 
        options={{ title: 'Consultas Agendadas' }} // Título personalizável
      />
      <Stack.Screen 
        name="Suporte" 
        component={SuporteScreen} 
        options={{ title: 'Agendar Consulta' }} // Título personalizável
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;