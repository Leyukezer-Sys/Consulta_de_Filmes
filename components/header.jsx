import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/logo.png')} // Altere para o caminho da sua imagem
        style={styles.logo}
      />
      <Text style={styles.title}>Movie Search App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#6200ea",
    padding: 20,
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Header;
