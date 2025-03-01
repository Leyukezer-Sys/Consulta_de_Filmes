import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Biblioteca para ícones
import { useTheme } from "../context/theme-context"; // Controle do tema

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme(); // Contexto de tema
  const [animation] = useState(new Animated.Value(1)); // Animação de escala

  const handleToggle = () => {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 0.8,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
    toggleTheme();
  };

  return (
    <View style={styles.header}>
      {/* Logo ou título à esquerda */}
      <View style={styles.leftSection}>
        <Image
          source={require("../assets/logo.png")} // Ajuste o caminho do seu logo
          style={styles.logo}
        />
        <Text style={styles.title}>Movie Search App</Text>
      </View>

      {/* Ícone à direita */}
      <TouchableOpacity onPress={handleToggle} style={styles.mode}>
        <Animated.View style={{ transform: [{ scale: animation }] }}>
          <Icon name={isDarkMode ? "moon" : "sunny"} size={24} color="#fff" />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "transparent",
    width: '100%',
    padding: 20,
    flexDirection: "row", // Itens organizados na horizontal
    alignItems: "flex-start", // Centraliza verticalmente no centro
    justifyContent: "space-between", // Espaço entre os lados esquerdo e direito
  },
  leftSection: {
    flexDirection: "row", // Itens lado a lado na esquerda
    alignItems: "center", // Centraliza verticalmente
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  mode: { 
    width: '100%',
    alignItems: "flex-end"
   },
});

export default Header;
