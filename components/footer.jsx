import React from "react";
import {useNavigation} from "@react-navigation/native"
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Biblioteca de ícones

const Footer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.footer}>
      {/* Botão de "Inicio" */}
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Home")}>
        <Icon name="home-outline" size={24} color="white" />
        <Text style={styles.text}>Inicio</Text>
      </TouchableOpacity>

      {/* Botão de "Pesquisar" */}
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Search")}>
        <Icon name="search-outline" size={24} color="white" />
        <Text style={styles.text}>Pesquisar</Text>
      </TouchableOpacity>

      {/* Botão de "Categorias" */}
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Categories")}>
        <Icon name="albums-outline" size={24} color="white" />
        <Text style={styles.text}>Categorias</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#6200ea",
    padding: 20,
    alignItems: "center",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around", // Espaçamento uniforme entre os botões
  },
  text: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 5, // Espaçamento entre o ícone e o texto
  },
  botao: {
    alignItems: "center",
  },
});

export default Footer;