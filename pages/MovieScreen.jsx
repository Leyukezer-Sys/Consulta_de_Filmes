import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Toast from "react-native-toast-message";
import { getMovieDetails } from "../services/api";

const MovieDetailsScreen = ({ route }) => {
  const { movieId } = route.params;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await getMovieDetails(movieId);
        setMovie(details);
        Toast.show({
          type: "success",
          position: "bottom",
          text1: "Detalhes do filme carregados!",
          text2: `Você está vendo: ${details.title}`,
          visibilityTime: 3000,
        });
      } catch (error) {
        console.error("Erro ao buscar detalhes do filme:", error);
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Erro ao carregar detalhes",
          text2: "Tente novamente mais tarde.",
          visibilityTime: 3000,
        });
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        {movie ? (
          <>
            <Text style={styles.title}>{movie.title}</Text>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
              }}
              style={styles.poster}
            />
            <Text style={styles.overview}>{movie.overview}</Text>
            <Text style={styles.rating}>Avaliação: {movie.vote_average}</Text>
            <Text style={styles.releaseDate}>
              Data de lançamento: {movie.release_date}
            </Text>
          </>
        ) : (
          <Text>Carregando...</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f4f9",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6200ea",
    textAlign: "center",
  },
  poster: {
    width: 300,
    height: 450,
    marginVertical: 20,
  },
  overview: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
  rating: {
    fontSize: 18,
    color: "#6200ea",
    marginTop: 10,
  },
  releaseDate: {
    fontSize: 14,
    color: "#333",
  },
});

export default MovieDetailsScreen;
