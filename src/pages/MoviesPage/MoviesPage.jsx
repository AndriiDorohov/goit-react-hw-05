import { useState, useEffect } from "react";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList.jsx";
import { searchMovies } from "../../services/tmdb/index.js";
import styles from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const [searchTerm, setSearchTerm] = useState(query);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!query) return;

    async function fetchSearchResults() {
      setLoading(true);
      setError(null);

      try {
        const data = await searchMovies(query);
        setMovies(data.results);
      } catch {
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchSearchResults();
  }, [query]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") {
      alert("Please enter a search term");
      return;
    }
    setSearchParams({ query: searchTerm.trim() });
  };

  const goToDetails = (movieId) => {
    navigate(`/movies/${movieId}`, {
      state: { from: location.pathname + location.search },
    });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Enter movie name"
          className={styles.input}
          autoFocus
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && movies.length > 0 && (
        <MovieList movies={movies} onMovieClick={goToDetails} />
      )}
      {!loading && !error && movies.length === 0 && query && (
        <p>No results found for "{query}"</p>
      )}
    </div>
  );
}
