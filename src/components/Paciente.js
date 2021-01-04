import React from "react";
const Paciente = ({ paciente, eliminarPaciente }) => {
  const { nombre, apellido, dni, fecha, hora, sintomas } = paciente;
  return (
    <div className="cita">
      <p>
        Nombre: <span>{nombre}</span>
      </p>
      <p>
        Apellido: <span>{apellido}</span>
      </p>
      <p>
        Dni: <span>{dni}</span>
      </p>
      <p>
        Fecha: <span>{fecha}</span>
      </p>
      <p>
        Hora: <span>{hora}</span>
      </p>
      <p>
        Sintomas: <span>{sintomas}</span>
      </p>
      <button
        className="button eliminar u-full-width"
        onClick={() => {
          eliminarPaciente(paciente.id);
        }}
      >
        Eliminar &times;
      </button>
    </div>
  );
};

export default Paciente;
