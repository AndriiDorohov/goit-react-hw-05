import styles from "./MovieHeader.module.css";

export default function MovieHeader({ movie, onGoBack }) {
  if (!movie) return null;

  const { title, poster_path, vote_average, overview, genres } = movie;

  return (
    <>
      <button onClick={onGoBack} className={styles.toggleBtn}>
        ← Back
      </button>

      <h1>{title}</h1>

      <div className={styles.detailsWrapper}>
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            className={styles.poster}
          />
        ) : (
          <div className={styles.noImage}>No Image</div>
        )}

        <div className={styles.movieInfo}>
          <p>
            <strong>User Score:</strong> {Math.round(vote_average * 10)}%
          </p>
          <p>
            <strong>Overview:</strong> {overview || "No overview available."}
          </p>
          <p>
            <strong>Genres:</strong>{" "}
            {genres?.length ? genres.map((g) => g.name).join(", ") : "N/A"}
          </p>
        </div>
      </div>
    </>
  );
}
