import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieReviews } from "../../services/tmdb";
import styles from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    async function loadReviews() {
      setStatus("loading");
      try {
        const data = await fetchMovieReviews(movieId);
        setReviews(data || []);
        setStatus("success");
      } catch {
        setError("Failed to load reviews");
        setStatus("error");
      }
    }

    loadReviews();
  }, [movieId]);

  if (status === "loading") return <p>Loading reviews...</p>;
  if (status === "error") return <p>{error}</p>;
  if (!reviews.length) return <p>No reviews available.</p>;

  return (
    <ul className={styles.reviewList}>
      {reviews.map(({ id, author, content }) => (
        <li key={id} className={styles.reviewItem}>
          <p>
            <strong>{author}</strong> says:
          </p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
}
