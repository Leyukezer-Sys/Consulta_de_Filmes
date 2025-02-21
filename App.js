import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, StyleSheet } from "react-native";
import Toast from "react-native-toast-message";

// Importando os componentes

import Header from "./components/header"; // O componente Header
import HomeScreen from "./pages/HomeScreen"; // A página Home
import SearchScreen from "./pages/SearchScreen"; // A página de Busca de Filmes
import MovieDetailsScreen from "./pages/MovieScreen";

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
        <Stack.Screen
          name="MovieDetails"
          component={MovieDetailsScreen}
          options={{
            headerTitle: () => <Header />,
            headerStyle: { backgroundColor: "#6200ea" },
          }}
        />
      </Stack.Navigator>

      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
};

export default App;