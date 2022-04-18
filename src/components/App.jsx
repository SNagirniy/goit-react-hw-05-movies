import { Route, Routes, Navigate } from "react-router-dom";
import Navigaton from "./Navigaton/Navigaton";
import HomePage from "./HomePage/HomePage";
import MoviePage from "./MoviePage/MoviePage";
import { MoviesDetailsPage } from "./MovieDetailsPage/MoviesDetailsPage";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";


export const App = () => {
  return (
    <>
      <Navigaton />
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="movies" element={<MoviePage />} />
        <Route path="movies/:itemId" element={<MoviesDetailsPage />}>
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews/>}/>
        </Route>
        <Route path="*" element={<Navigate to="/"/>}/>
    </Routes></>
    
  );
};
