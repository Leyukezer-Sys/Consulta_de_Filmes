import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Toast from "react-native-toast-message";
import Footer from "./components/footer";
import Header from "./components/header"; // O componente Header
import HomeScreen from "./pages/HomeScreen"; // A página Home
import SearchScreen from "./pages/SearchScreen"; // A página de Busca de Filmes
import MovieDetailsScreen from "./pages/MovieScreen";
import CategoriesScreen from "./pages/CategoriesScreen"; // Tela de Categorias
import CategoryItemsScreen from "./pages/CategoryItemsScreen";
import { ThemeProvider } from "./context/theme-context"; // Suporte ao contexto de tema

const Stack = createStackNavigator();

const App = () => {
  return (
    <ThemeProvider>
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
          <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            headerTitle: () => <Header />,
            headerStyle: { backgroundColor: "#6200ea" },
          }}
        />
        <Stack.Screen
          name="CategoryItems"
          component={CategoryItemsScreen}
          options={{
            headerTitle: () => <Header />,
            headerStyle: { backgroundColor: "#6200ea" },
          }}/>
        </Stack.Navigator>

        {/* Inclua o Footer com Navegação */}
        <Footer />
        <Toast/>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;