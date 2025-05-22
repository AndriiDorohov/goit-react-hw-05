import {
  useParams,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { fetchMovieDetails, fetchMovieReviews } from "../../services/tmdb";
import styles from "./MovieDetailsPage.module.css";
import MovieHeader from "../../components/MovieHeader/MovieHeader";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from || "/movies");

  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState("idle");
  const [hasReviews, setHasReviews] = useState(true);

  const from = location.state?.from || "/movies";

  const currentSection = location.pathname.split("/").pop();
  const isCast = currentSection === "cast";
  const isReviews = currentSection === "reviews";

  useEffect(() => {
    if (!movieId) return;

    async function loadData() {
      setStatus("loading");
      try {
        const [movieData, reviewsData] = await Promise.all([
          fetchMovieDetails(movieId),
          fetchMovieReviews(movieId),
        ]);

        if (!movieData || movieData.success === false || !movieData.title) {
          setStatus("error");
          return;
        }

        setMovie(movieData);
        setHasReviews(reviewsData.length > 0);
        setStatus("success");
      } catch {
        setStatus("error");
      }
    }

    loadData();
  }, [movieId]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <Navigate to="/404" replace />;
  if (!movie) return null;

  const navigateTo = (section) => {
    const path = section
      ? `/movies/${movieId}/${section}`
      : `/movies/${movieId}`;
    navigate(path, { state: { from } });
  };

  return (
    <div className={styles.container}>
      <MovieHeader
        movie={movie}
        onGoBack={() => navigate(backLinkRef.current)}
      />

      <h2>Additional information</h2>

      <div className={styles.toggleButtons}>
        <button
          className={`${styles.toggleBtn} ${isCast ? styles.active : ""}`}
          onClick={() => navigateTo(isCast ? null : "cast")}
        >
          Cast
        </button>
        <button
          className={`${styles.toggleBtn} ${isReviews ? styles.active : ""}`}
          onClick={() => navigateTo(isReviews ? null : "reviews")}
          disabled={!hasReviews}
        >
          Reviews
        </button>
      </div>

      {isCast && <MovieCast movieId={movieId} />}
      {isReviews && <MovieReviews movieId={movieId} />}
    </div>
  );
}
