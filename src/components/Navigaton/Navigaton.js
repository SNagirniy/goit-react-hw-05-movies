import { NavLink, Outlet } from 'react-router-dom';

const Navigaton = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <Outlet />
    </nav>
  );
};

export default Navigaton;
