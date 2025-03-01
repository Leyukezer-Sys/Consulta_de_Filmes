//services/api
import axios from "axios";

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODJlNDM5OGZmMDM5ZjQ2NjA5NzcyMTUyYjM2OTUxZCIsIm5iZiI6MTc0MDE2MDQ2NC42NTEsInN1YiI6IjY3YjhiZGQwM2U5ODZiYTg5MGYzYzY4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i-K2wNlA0hfgZTbqYdmhnSE-DaMEM-ltU9NDCA3luEo";
const BASE_URL = "https://api.themoviedb.org/3";

const api = axios.create({
  baseURL: BASE_URL,
  method: "GET",
  params: { include_adult: "false", language: "pt-BR", page: "1" },
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + API_KEY,
  },
});

export const searchMovies = async (query) => {
  try {
    const response = await api.get("/search/movie", {
      api_key: API_KEY,
      params: { query },
    });
    return response.data.results;
  } catch (error) {
    console.error("Erro ao buscar filmes:", error);
    return [];
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    const response = await api.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar detalhes do filme:", error);
    return null;
  }
};

export default api;
