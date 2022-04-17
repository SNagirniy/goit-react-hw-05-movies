import { Route, Routes, Navigate } from "react-router-dom";
import Navigaton from "./Navigaton/Navigaton";
import HomePage from "./HomePage/HomePage";
import MoviePage from "./MoviePage/MoviePage";
import { MoviesDetailsPage } from "./MovieDetailsPage/MoviesDetailsPage";


export const App = () => {
  return (
    <>
      <Navigaton />
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="movies" element={<MoviePage />} />
        <Route path="movies/:itemId" element={<MoviesDetailsPage/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
    </Routes></>
    
  );
};
