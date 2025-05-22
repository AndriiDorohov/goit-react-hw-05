import styles from "./MovieList.module.css";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w200";

export default function MovieList({ movies = [], onMovieClick }) {
  return (
    <ul className={styles.list}>
      {movies.map(({ id, title, poster_path, release_date }) => {
        const year = release_date?.slice(0, 4) || "N/A";
        const handleClick = () => onMovieClick?.(id);

        return (
          <li
            key={id}
            className={styles.item}
            onClick={handleClick}
            style={{ cursor: onMovieClick ? "pointer" : "default" }}
          >
            <div className={styles.imageWrapper}>
              {poster_path ? (
                <img
                  src={`${IMAGE_BASE_URL}${poster_path}`}
                  alt={title}
                  className={styles.poster}
                />
              ) : (
                <div className={styles.noImage}>No Image</div>
              )}
            </div>
            <p className={styles.title}>
              {title} ({year})
            </p>
          </li>
        );
      })}
    </ul>
  );
}
