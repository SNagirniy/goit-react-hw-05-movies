import { Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './App.module.css'


const Navigaton = lazy(() => import('../components/Navigaton/Navigaton'));
const HomePage = lazy(() => import('../components/HomePage/HomePage'));
const MoviePage = lazy(() => import('../components/MoviePage/MoviePage'));
const MoviesDetailsPage = lazy(() => import('../components/MovieDetailsPage/MoviesDetailsPage'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));



export const App = () => {
  return (
    <>
      <div className={s.container}>
        <Suspense fallback="">
        <Navigaton />
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="movies" element={<MoviePage />} />
        <Route path="movies/:itemId" element={<MoviesDetailsPage />}>
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews/>}/>
        </Route>
        <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </Suspense>
        <ToastContainer autoClose={1500} />
      </div>
      
      </>
    
  );
};
