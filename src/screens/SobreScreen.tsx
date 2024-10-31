import React from 'react';
import { View, Text, ScrollView, StyleSheet, Button, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator'; // Ajuste o caminho conforme seu projeto
import { useNavigation } from '@react-navigation/native';

type SobreScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Sobre'
>;

const SobreScreen = () => {
  const navigation = useNavigation<SobreScreenNavigationProp>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.overlay}>
          <Text style={styles.mainTitle}>Uma maneira mais fácil de criar suas apresentações</Text>
          <Text style={styles.subtitle}>Em apenas um clique seu Power Point está finalizado. Você entra apenas com os toques finais.</Text>
        </View>
      </View>

      <View style={styles.ferramenta}>
        <Text style={styles.ferramentaTitle}>Uma ferramenta futurística em suas mãos</Text>
        <Text style={styles.subtitulo}>Nossa Inteligência Artificial agrupa seus documentos e cria um PowerPoint personalizado para você.</Text>

        <View style={styles.featuresContainer}>
          <View style={styles.featureBox}>
            <Text style={styles.starIcon}>★</Text>
            <Text style={styles.featureTitle}>Suporte dos documentos</Text>
            <Text style={styles.featureText}>Nossa IA aceita diversos tipos de documentos, como planilhas do Excel, prints de E-mails, fotos, vídeos, relatórios e gráficos.</Text>
          </View>

          <View style={styles.featureBox}>
            <Text style={styles.starIcon}>★</Text>
            <Text style={styles.featureTitle}>Ajuda e Suporte</Text>
            <Text style={styles.featureText}>A IA possui uma parte específica de ajuda que contém dúvidas frequentes e suporte com o contato de TI da Sandro ou Magnus.</Text>
          </View>

          <View style={styles.featureBox}>
            <Text style={styles.starIcon}>★</Text>
            <Text style={styles.featureTitle}>Inserção de Softwares</Text>
            <Text style={styles.featureText}>Nosso software possui integração com a Microsoft Office.</Text>
          </View>

          <View style={styles.featureBox}>
            <Text style={styles.starIcon}>★</Text>
            <Text style={styles.featureTitle}>Formato Storytelling</Text>
            <Text style={styles.featureText}>Nossa apresentação de slides conta com o formato de storytelling, estilo já inserido na BU de negócios.</Text>
          </View>

          <View style={styles.featureBox}>
            <Text style={styles.starIcon}>★</Text>
            <Text style={styles.featureTitle}>Funcionamento</Text>
            <Text style={styles.featureText}>A IA analisa o texto e arquivos inseridos e gera slides automaticamente. Se necessário, você pode editar.</Text>
          </View>
        </View>

        <Button title="Testar ferramenta" onPress={() => navigation.navigate('HudsonIA')} />
        <Image source={require('../../assets/qrcode.png')} style={styles.qrCode} />
        <Text style={styles.adaptavelText}>Adaptável em qualquer idioma</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    position: 'relative',
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#26004C',
  },
  overlay: {
    position: 'absolute',
    top: '30%',
    left: '10%',
    width: '80%',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 8,
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
    marginTop: 10,
  },
  ferramenta: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  ferramentaTitle: {
    fontSize: 22,
    color: '#5B0EA8',
    marginBottom: 10,
    fontWeight: '500',
  },
  subtitulo: {
    fontSize: 18,
    color: '#5B0EA8',
    marginBottom: 20,
    textAlign: 'center',
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 20,
  },
  featureBox: {
    width: '45%',
    padding: 15,
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  starIcon: {
    fontSize: 24,
    color: '#7a00e6',
  },
  featureTitle: {
    fontSize: 18,
    color: '#5B0EA8',
    fontWeight: 'bold',
    marginVertical: 5,
  },
  featureText: {
    fontSize: 14,
    color: '#26004C',
    textAlign: 'center',
  },
  qrCode: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
  adaptavelText: {
    fontSize: 14,
    color: '#7a00e6',
    marginTop: 10,
  },
});

export default SobreScreen;
