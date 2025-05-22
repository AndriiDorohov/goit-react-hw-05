

# Homework

## Created Repository: `goit-react-hw-05`

- Repository: **goit-react-hw-05**  
- When submitting the homework, provide two links: one to the source files and one to the deployed page on [**Vercel**](https://vercel.com/).  
- The project must be created using [**Vite**](https://vite.dev/).  
- When running the code, there should be no errors or warnings in the console.  
- For each component in the `src/components` folder, there is a separate folder containing the JSX file for the React component and its corresponding styles file. The folder name, component file (with the `.jsx` extension), and styles file (with `.module.css` before the extension) should be the same and match the names specified in the tasks (if provided).  
- For each page in the `src/pages` folder, there is a separate folder containing the JSX file for the React component and its corresponding styles file. The folder name, component file (with the `.jsx` extension), and styles file (with `.module.css` before the extension) should be the same and match the names specified in the tasks (if provided).  
- **Default export** (`export default`) is used for components.  
- The JS code should be clean and readable — use **Prettier**.  
- Styling should be done using **CSS Modules**.  
---
## 🧩 Project Summary

**Movie Search App** — a React-based application built with Vite, utilizing the [TMDB API](https://www.themoviedb.org/) to browse trending movies, search by keyword, and explore movie details including cast and reviews.

### Key Features

- 🔎 Movie search functionality with dynamic and nested routing
- 🗂 Code-splitting using `React.lazy()` and `Suspense`
- 🎥 Fetching data from the TMDB API (Trending, Search, Details, Cast, Reviews)
- 🧭 Navigation state preserved with "Go back" functionality
- 🧱 Modular structure using CSS Modules and component folders
- 🚀 Deployed on [Vercel](https://vercel.com)

**Links:**

- [🔗 Live Preview on Vercel](https://goit-react-hw-05-r4cufyr4h-andriis-projects-a2d81702.vercel.app/)
- [📂 GitHub Repository](https://github.com/AndriiDorohov/goit-react-hw-05)

---
## 📦 Technology Stack and Versions

This project was built using the following key dependencies and versions:

- **React:** 19.1.0  
- **React DOM:** 19.1.0  
- **React Router DOM:** 7.6.0  
- **Vite:** 6.3.5  
- **Axios:** 1.9.0  
- **clsx:** 2.1.1  
- **modern-normalize:** 3.0.1  

### Development dependencies:

- **ESLint:** 9.25.0  
- **@vitejs/plugin-react-swc:** 3.9.0  
- **eslint-plugin-react-hooks:** 5.2.0  
- **eslint-plugin-react-refresh:** 0.4.19  

---

> Note: These versions reflect the package versions used at the time of development to ensure compatibility and stability.

---

## ✨ Additional Improvements

> These improvements go beyond the homework requirements and demonstrate initiative and attention to developer experience and user interface:

- ✅ **Automated File Structure Setup**  
  Custom Bash script that generates folders and starter component files for both pages and reusable UI.
- ✅ **Centralized API Service Layer**  
  All API logic is abstracted into a separate `services/tmdb/` module with clear separation of concerns.
- ✅ **Additional Component: `MovieHeader`**  
  Reusable component to display movie title, poster, and metadata in a consistent layout.
- ✅ **Robust Error Handling**  
  User-friendly error messages for failed API requests or empty search results.
- ✅ **Enhanced UX**  
  - "Go back" link behavior accounts for browser refresh  
  - Loading state fallback via `Suspense`  
  - **Alternating background colors for movie reviews** — improved readability by styling review items with alternating background shades using CSS `:nth-child(even)` selector.
- ✅ **Clean, Consistent Code Style**  
  Enforced using **Prettier**, with readable, formatted JSX and CSS Modules.

## 🚀 Getting Started Locally


1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/goit-react-hw-05.git
```
2.  **Install dependencies:**
    
```bash
npm install 
```

3.  **Start the development server:**
    
```bash
npm run dev
```
---

## Movie Search

Create an application with routing to search for movies by title.  
Watch the demo video to see how the app works.

[![Watch the demo](https://img.youtube.com/vi/dS3nCSGsr8I/0.jpg)](https://youtu.be/dS3nCSGsr8I)

### Movie Search Service

In this task, you will use HTTP requests to fetch movies from the [**TMDB**](https://www.themoviedb.org/) service.  
Register an account (you can use any data) to get access to the [**documentation**](https://developer.themoviedb.org/docs/getting-started) and an access key for HTTP requests.

#### Helpful Documentation Sections

- [**Trending movies**](https://developer.themoviedb.org/reference/trending-movies) — a list of the most popular movies today for displaying on the homepage.
- [**Search movie**](https://developer.themoviedb.org/reference/search-movie) — to search for movies by keyword on the movies page.
- [**Movie details**](https://developer.themoviedb.org/reference/movie-details) — to fetch full information about a movie for the movie details page.
- [**Movie credits**](https://developer.themoviedb.org/reference/movie-credits) — to get cast information for the movie page.
- [**Movie reviews**](https://developer.themoviedb.org/reference/movie-reviews) — to get reviews for the movie page.



### Access Token

The access token must be included in every request as an HTTP `Authorization` header.  
Here is an example:
```jsx
const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

const options = {
  headers: {
	// Replace api_read_access_token with your own token
    Authorization: 'Bearer api_read_access_token'
  }
};

axios.get(url, options)
  .then(response => console.log(response))
  .catch(err => console.error(err));

```

The access token can be found in the **API Read Access Token** section on the [**API settings page**](https://www.themoviedb.org/settings/api).

![API](https://github.com/AndriiDorohov/goit-react-hw-05/raw/main/public/api.png)

### Image Path

The backend will send only partial image paths (just the filename) instead of full image URLs, for example, for a movie poster.
```
/1E5baAaEse26fej7uHcjOgEE2t2.jpg
```

To build the full image URL, you need to refer to the [**documentation section**](https://developer.themoviedb.org/docs/image-basics) dedicated to this topic.

In short, you should manually prepend the path before the image filename.  
As a result, you will get a complete URL to the image.
```
https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg
```
### Navigation in the App

The application must include the following routes:

- `'/'` – `HomePage` component, the homepage with a list of popular movies.  
- `'/movies'` – `MoviesPage` component, the page for searching movies by keyword.  
- `'/movies/:movieId'` – `MovieDetailsPage` component, the page with detailed information about a movie.  
- `'/movies/:movieId/cast'` – `MovieCast` component, information about the cast. Rendered at the bottom of the `MovieDetailsPage`.  
- `'/movies/:movieId/reviews'` – `MovieReviews` component, information about reviews. Rendered at the bottom of the `MovieDetailsPage`.  

If a user navigates to a nonexistent route, show the `NotFoundPage` component with a `Link` to the homepage.

### Files, Folders, and Components

Files of page components such as `HomePage`, `MoviesPage`, `MovieDetailsPage`, `NotFoundPage` should be in the folder `src/pages`.  
Components `MovieCast` and `MovieReviews` are not separate pages; they are only parts of the page `MovieDetailsPage`, so the files for these components are stored in `src/components`.  
The navigation menu with links should be moved to the component `Navigation`. It consists of two components `NavLink` that point to the routes `/` and `/movies`.  
To display a list of movies, create the component `MovieList`. Use it on the pages `HomePage` and `MoviesPage`.

When clicking on the **Go back** link (after viewing cast/reviews), the user should return to the page from which they navigated to the movie details page.  
If the page was refreshed and the location object was lost, return the user to `"/movies"`.

### Code Splitting

Add asynchronous loading of JS code for the app routes using `React.lazy` and `Suspense`.


### Resulting structure example

```plaintext
src/
├── components/
│   ├── App/
│   │   ├── App.jsx
│   │   └── App.module.css
│   ├── MovieCast/
│   │   ├── MovieCast.jsx
│   │   └── MovieCast.module.css
│   ├── MovieHeader/
│   │   ├── MovieHeader.jsx
│   │   └── MovieHeader.module.css
│   ├── MovieList/
│   │   ├── MovieList.jsx
│   │   └── MovieList.module.css
│   ├── MovieReviews/
│   │   ├── MovieReviews.jsx
│   │   └── MovieReviews.module.css
│   └── Navigation/
│       ├── Navigation.jsx
│       └── Navigation.module.css
├── pages/
│   ├── HomePage/
│   │   ├── HomePage.jsx
│   │   └── HomePage.module.css
│   ├── MovieDetailsPage/
│   │   ├── MovieDetailsPage.jsx
│   │   └── MovieDetailsPage.module.css
│   ├── MoviesPage/
│   │   ├── MoviesPage.jsx
│   │   └── MoviesPage.module.css
│   └── NotFoundPage/
│       ├── NotFoundPage.jsx
│       └── NotFoundPage.module.css
├── services/
│   └── tmdb/
│       ├── config.js
│       └── index.js
├── index.css
├── main.jsx

```

## Script for Creating Directory and File Tree

This bash script automatically sets up the directory structure and initial files for the movie search React project using Vite.

It creates folders and starter React components with CSS modules for pages and reusable components. Also, it includes a basic `App.jsx` with React.lazy and Suspense for route-based code splitting.

---

### What the script does:

- Deletes default Vite starter files (`src/App.jsx`, `src/App.css`, `src/main.jsx`, `src/index.css`)
- Creates directories:
  - `src/pages` — for page components (HomePage, MoviesPage, MovieDetailsPage, NotFoundPage)
  - `src/components` — for shared components (Navigation, NavLink, MovieList, MovieCast, MovieReviews)
- Generates React component files (`.jsx`) and corresponding CSS modules (`.module.css`)
- Sets up `src/main.jsx` to render the `App` component
- Creates a basic `src/App.jsx` with lazy-loaded routes and Suspense fallback
- Adds a global `src/index.css` with simple CSS reset and styling

---

### Usage

Run the script in the project root (where `src` folder is located):
```jsx
#!/bin/bash

rm -f src/App.jsx src/App.css src/main.jsx src/index.css

mkdir -p src/pages
mkdir -p src/components/App

pages=("HomePage" "MoviesPage" "MovieDetailsPage" "NotFoundPage")

for page in "${pages[@]}"
do
  mkdir -p src/pages/$page
  cat <<EOF > src/pages/$page/$page.jsx
import styles from "./$page.module.css";

export default function $page() {
  return (
    <div className={styles.container}>
      <h2>$page</h2>
    </div>
  );
}
EOF

  touch src/pages/$page/$page.module.css
done

components=("Navigation" "NavLink" "MovieList" "MovieCast" "MovieReviews")

for component in "${components[@]}"
do
  mkdir -p src/components/$component
  cat <<EOF > src/components/$component/$component.jsx
import styles from "./$component.module.css";

export default function $component() {
  return (
    <div className={styles.container}>
      <h2>$component</h2>
    </div>
  );
}
EOF

  touch src/components/$component/$component.module.css
done

cat <<EOF > src/components/App/App.jsx
import React, { Suspense, lazy } from "react";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage/MovieDetailsPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <h1>App Component</h1>
    </Suspense>
  );
}
EOF

cat <<EOF > src/components/App/App.module.css
.container {
  padding: 1rem;
}
EOF

cat <<EOF > src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
EOF

cat <<EOF > src/index.css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #f9f9f9;
  color: #333;
}

#root {
  padding: 2rem;
}
EOF

```


