import React, { Suspense, lazy } from "react";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage/MovieDetailsPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* Тут буде маршрутизація */}
      <h1>App Component</h1>
    </Suspense>
  );
}
