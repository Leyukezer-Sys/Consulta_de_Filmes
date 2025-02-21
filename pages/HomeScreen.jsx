import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  const handlePress = () => {
    // Navegar para a tela SearchScreen
    navigation.navigate("Search");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>Bem-vindo ao Movie Search App!</Text>
      <Text style={styles.descriptionText}>
        Este aplicativo permite que você busque e descubra filmes com
        facilidade. Explore filmes de diferentes gêneros, veja informações
        detalhadas e muito mais.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Começar a Buscar Filmes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Centraliza o conteúdo verticalmente
    alignItems: "center", // Centraliza o conteúdo horizontalmente
    padding: 20,
    backgroundColor: "#f4f4f9",
  },
  infoText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6200ea",
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#6200ea",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeScreen;
