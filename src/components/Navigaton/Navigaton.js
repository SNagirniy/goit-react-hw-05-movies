import { NavLink, Outlet } from 'react-router-dom';

import s from './Navigation.module.css';

const Navigaton = () => {
  return (
    <nav className={s.nav_container}>
      <NavLink
        className={({ isActive }) => (isActive ? s.active : s.link)}
        to="/"
      >
        {' '}
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? s.active : s.link)}
        to="/movies"
      >
        Movies
      </NavLink>
      <Outlet />
    </nav>
  );
};

export default Navigaton;
