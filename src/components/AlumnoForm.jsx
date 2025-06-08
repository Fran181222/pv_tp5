import React, { useState, useEffect } from 'react';
import '../index.css'

const AlumnoForm = ({ initialData = {}, onSubmit }) => {
  const [alumno, setAlumno] = useState({
    lu: '',
    nombre: '',
    apellido: '',
    curso: '',
    email: '',
    domicilio: '',
    telefono: '',
    ...initialData
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlumno({ ...alumno, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(alumno); // Emite evento con los datos del formulario
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="lu" placeholder="LU" value={alumno.lu} onChange={handleChange} required />
      <input name="nombre" placeholder="Nombre" value={alumno.nombre} onChange={handleChange} required />
      <input name="apellido" placeholder="Apellido" value={alumno.apellido} onChange={handleChange} required />
      <input name="curso" placeholder="Curso" value={alumno.curso} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={alumno.email} onChange={handleChange} required />
      <input name="domicilio" placeholder="Domicilio" value={alumno.domicilio} onChange={handleChange} />
      <input name="telefono" placeholder="Teléfono" value={alumno.telefono} onChange={handleChange} />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default AlumnoForm;
