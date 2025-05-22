import api from "./config.js";

export async function fetchPopularMovies() {
  try {
    const { data } = await api.get("/trending/movie/day");
    console.log("fetchPopularMovies data:", data);
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.status_message || error.message);
  }
}

export async function searchMovies(query) {
  try {
    const { data } = await api.get("/search/movie", {
      params: { query, include_adult: false, language: "en-US", page: 1 },
    });
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.status_message || error_message);
  }
}

export async function fetchMovieDetails(movieId) {
  try {
    const { data } = await api.get(`/movie/${movieId}`, {
      params: { language: "en-US" },
    });
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.status_message || error.message);
  }
}

export async function fetchMovieCast(movieId) {
  try {
    const { data } = await api.get(`/movie/${movieId}/credits`, {
      params: { language: "en-US" },
    });
    return data.cast;
  } catch (error) {
    throw new Error(error.response?.data?.status_message || error.message);
  }
}

export async function fetchMovieReviews(movieId) {
  try {
    const { data } = await api.get(`/movie/${movieId}/reviews`, {
      params: { language: "en-US", page: 1 },
    });
    return data.results;
  } catch (error) {
    throw new Error(error.response?.data?.status_message || error.message);
  }
}
