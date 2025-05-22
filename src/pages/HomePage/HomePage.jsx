import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList.jsx";
import { fetchPopularMovies } from "../../services/tmdb/index.js";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const goToDetails = (movieId) => {
    navigate(`/movies/${movieId}`, {
      state: { from: location.pathname + location.search },
    });
  };

  useEffect(() => {
    async function getMovies() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchPopularMovies();
        setMovies(data.results);
      } catch {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Trending today</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && (
        <MovieList movies={movies} onMovieClick={goToDetails} />
      )}
    </div>
  );
}
