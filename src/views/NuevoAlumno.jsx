import React from 'react';
import { useNavigate } from 'react-router-dom';
import AlumnoForm from '../components/AlumnoForm';

const NuevoAlumno = ({onAdd}) => {
  const navigate = useNavigate();

  const handleAdd = (nuevoAlumno) => {
    // Aquí deberías agregar al array global o API
    onAdd(nuevoAlumno)
    alert('Alumno agregado exitosamente');
    navigate('/alumnos');
  };

  return (
    <div>
      <h2>Agregar Nuevo Alumno</h2>
      <AlumnoForm onSubmit={handleAdd} />
    </div>
  );
};

export default NuevoAlumno;
