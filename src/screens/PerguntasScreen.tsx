import React from 'react';
import { NativeBaseProvider, Box, Center, VStack, Text, Accordion, ScrollView } from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type PerguntasScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Perguntas'
>;

const PerguntasScreen: React.FC = () => {
  const navigation = useNavigation<PerguntasScreenNavigationProp>();

  return (
    <NativeBaseProvider>
      <ScrollView style={styles.container}>
        <Center flex={1} px={4}>
          <VStack space={4} width="100%" maxW="400px" style={styles.contentSection}>
            <Text fontSize="2xl" fontWeight="bold" textAlign="center" style={styles.title}>
              Perguntas Frequentes
            </Text>
            <Accordion allowMultiple>
              <Accordion.Item>
                <Accordion.Summary>
                  <Text fontWeight="bold">Como adicionar imagens e documentos?</Text>
                  <Accordion.Icon />
                </Accordion.Summary>
                <Accordion.Details>
                  <Text>
                    Na página do Assistente, há botões chamados Documento e Imagem, onde você pode adicionar os arquivos.
                  </Text>
                </Accordion.Details>
              </Accordion.Item>
              <Accordion.Item>
                <Accordion.Summary>
                  <Text fontWeight="bold">Como posso mandar uma mensagem para o suporte?</Text>
                  <Accordion.Icon />
                </Accordion.Summary>
                <Accordion.Details>
                  <Text>
                    Na aba de suporte, há um formulário onde você pode enviar uma mensagem para o time de suporte.
                  </Text>
                </Accordion.Details>
              </Accordion.Item>
              <Accordion.Item>
                <Accordion.Summary>
                  <Text fontWeight="bold">Como gerar os slides?</Text>
                  <Accordion.Icon />
                </Accordion.Summary>
                <Accordion.Details>
                  <Text>
                    No momento a unica forma é com o nosso aplicativo externo, nesse site apenas tem o Assistente Virtual "Hudson".
                  </Text>
                </Accordion.Details>
              </Accordion.Item>
            </Accordion>
          </VStack>

          {/* Botão de navegação para voltar à página HudsonIA */}
          <TouchableOpacity
            onPress={() => navigation.navigate('HudsonIA')}
            style={styles.backButton}
          >
            <Text style={styles.backButtonText}>Voltar para a Página Inicial</Text>
          </TouchableOpacity>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  contentSection: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 20,
    width: '90%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    color: '#5B0EA8',
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  backButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#5B0EA8',
    borderRadius: 8,
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PerguntasScreen;
