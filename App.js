import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, StyleSheet } from "react-native";

// Importando os componentes
import Header from "./components/header";  // O componente Header
import HomeScreen from "./pages/HomeScreen";  // A página Home
import SearchScreen from "./pages";  // A página de Busca de Filmes

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => <Header />,
            headerStyle: { backgroundColor: "#6200ea" },
          }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerTitle: () => <Header />,
            headerStyle: { backgroundColor: "#6200ea" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;