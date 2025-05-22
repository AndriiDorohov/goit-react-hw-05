import { Link, useLocation } from "react-router-dom";
import styles from "./MovieList.module.css";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w200";

export default function MovieList({ movies = [] }) {
  const location = useLocation();

  return (
    <ul className={styles.list}>
      {movies.map(({ id, title, poster_path, release_date }) => {
        const year = release_date?.slice(0, 4) || "N/A";

        return (
          <li key={id} className={styles.item}>
            <Link
              to={`/movies/${id}`}
              state={{ from: location }}
              className={styles.link}
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
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
