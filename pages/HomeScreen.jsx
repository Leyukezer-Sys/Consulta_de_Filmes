import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image, ActivityIndicator, TouchableOpacity } from "react-native";
import Footer from "../components/footer";
import { useTheme } from "../context/theme-context";
import api from "../services/api";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const HomeScreen = ({ navigation }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [popularMovies, setPopularMovies] = useState([]);
  const [topActionMovies, setTopActionMovies] = useState([]);
  const [topFictionMovies, setTopFictionMovies] = useState([]);
  const [topRomanceMovies, setTopRomanceMovies] = useState([]);
  const [topSeries, setTopSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responsePopular = await api.get("/movie/popular");
        setPopularMovies(responsePopular.data.results.slice(0, 10));

        const responseAction = await api.get("/discover/movie", { params: { with_genres: 28 } });
        setTopActionMovies(responseAction.data.results.slice(0, 10));

        const responseFiction = await api.get("/discover/movie", { params: { with_genres: 878 } });
        setTopFictionMovies(responseFiction.data.results.slice(0, 10));

        const responseRomance = await api.get("/discover/movie", { params: { with_genres: 10749 } });
        setTopRomanceMovies(responseRomance.data.results.slice(0, 10));

        const responseSeries = await api.get("/tv/popular");
        setTopSeries(responseSeries.data.results.slice(0, 10));
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Função que renderiza cada item
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("MovieDetails", { movieId: item.id })}
      style={styles.item}
    >
      <Image
        source={{ uri: `${IMAGE_BASE_URL}${item.poster_path}` }}
        style={styles.image}
        resizeMode="cover" // Garante que a imagem ocupe o espaço disponível
      />
      <Text
        style={styles.itemText}
        numberOfLines={2} // Limita o texto a 2 linhas
        ellipsizeMode="tail" // Trunca o texto com "..." se for muito longo
      >
        {item.title || item.name}
      </Text>
    </TouchableOpacity>
  );
  

  const themeStyles = isDarkMode ? darkStyles : lightStyles;

  return (
    <View style={[styles.container, themeStyles.container]}>
      <Text style={[styles.title, themeStyles.text]}>Bem-vindo ao Movie Search App!</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#6200ea" />
      ) : (
        <>
          <Text style={[styles.sectionTitle, themeStyles.text]}>Filmes Mais Assistidos</Text>
          <FlatList
            data={popularMovies}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            style={styles.list}
          />

          <Text style={[styles.sectionTitle, themeStyles.text]}>Top 10 Filmes de Ação</Text>
          <FlatList
            data={topActionMovies}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            style={styles.list}
          />

          <Text style={[styles.sectionTitle, themeStyles.text]}>Top 10 Filmes de Ficção</Text>
          <FlatList
            data={topFictionMovies}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            style={styles.list}
          />

          <Text style={[styles.sectionTitle, themeStyles.text]}>Top 10 Filmes de Romance</Text>
          <FlatList
            data={topRomanceMovies}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            style={styles.list}
          />

          <Text style={[styles.sectionTitle, themeStyles.text]}>Top Séries</Text>
          <FlatList
            data={topSeries}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            style={styles.list}
          />
        </>
      )}

      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  list: {
    marginBottom: 20,
    height: 240,
  },
  item: {
    padding: 10,
    backgroundColor: "#6200ea",
    borderRadius: 8,
    marginRight: 10,
    width: 120, // Ajusta o tamanho do item
    height: 240,
    alignItems: "center", // Centraliza o conteúdo no container
  },
  itemText: {
    color: "#fff",
    fontSize: 12, // Texto ajustado para caber no espaço
    marginTop: 8, // Espaço entre a imagem e o texto
    textAlign: "center", // Centraliza o texto
    width: "100%", // Garante que o texto ocupe todo o espaço
  },
  image: {
    width: "100%", // A imagem ocupa toda a largura do item
    height: 150, // Altura fixa para a imagem
    borderRadius: 8,
  },
});

const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: "#f4f4f9",
  },
  text: {
    color: "#333",
  },
  button: {
    backgroundColor: "#6200ea",
  },
});

const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: "#333",
  },
  text: {
    color: "#f4f4f9",
  },
  button: {
    backgroundColor: "#bb86fc",
  },
});

export default HomeScreen;