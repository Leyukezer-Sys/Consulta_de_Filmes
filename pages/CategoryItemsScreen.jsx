import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import api from "../services/api";

const CategoryItemsScreen = ({ route }) => {
  const { categoryId, categoryName } = route.params;
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await api.get("/discover/movie", {
          params: { with_genres: categoryId },
        });
        setMovies(response.data.results); // Assuming the API returns a "results" array
      } catch (error) {
        console.error("Erro ao buscar filmes por categoria:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [categoryId]);

  const renderMovie = ({ item }) => (
    <View style={styles.movieItem}>
      <Text style={styles.movieTitle}>{item.title}</Text>
    </View>
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#6200ea" style={styles.loader} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filmes: {categoryName}</Text>
      <FlatList
        data={movies}
        renderItem={renderMovie}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f9",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6200ea",
    marginBottom: 20,
    textAlign: "center",
  },
  list: {
    paddingBottom: 20,
  },
  movieItem: {
    backgroundColor: "#6200ea",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  movieTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryItemsScreen;