import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
        <Link id='nav-element' to="/">Inicio</Link>
        <Link id='nav-element' to="/alumnos">Lista de Alumnos</Link>
        <Link id='nav-element' to="/nuevo">Nuevo Alumno</Link>
        <Link id='nav-element' to="/acerca">Acerca de</Link>
    </nav>
  );
};

export default NavBar;