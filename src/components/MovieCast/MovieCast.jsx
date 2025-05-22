import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieCast } from "../../services/tmdb";
import styles from "./MovieCast.module.css";

const IMG_URL = "https://image.tmdb.org/t/p/w200";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const loadCast = async () => {
      setLoading(true);
      try {
        const data = await fetchMovieCast(movieId);
        setCast(data || []);
        setError(null);
      } catch {
        setError("Failed to load cast");
      } finally {
        setLoading(false);
      }
    };
    loadCast();
  }, [movieId]);

  if (loading) return <p>Loading cast...</p>;
  if (error) return <p>{error}</p>;
  if (!cast.length) return <p>No cast available.</p>;

  return (
    <ul className={styles.castList}>
      {cast.map(({ id, name, character, profile_path }) => (
        <li key={id} className={styles.castItem}>
          {profile_path ? (
            <img
              src={`${IMG_URL}${profile_path}`}
              alt={`${name} photo`}
              className={styles.castImage}
            />
          ) : (
            <div className={styles.noImage}>No Image</div>
          )}
          <p>
            <strong>{name}</strong>
          </p>
          <p>
            <em>as {character}</em>
          </p>
        </li>
      ))}
    </ul>
  );
}
