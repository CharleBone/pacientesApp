import React, { Fragment, useState } from "react";
import uuid from "uuid/dist/v4";
const Formulario = ({ getPacientes }) => {
  const [paciente, setPaciente] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, setError] = useState(false);

  const _actualizarPaciente = (e) => {
    setPaciente({
      ...paciente,
      [e.target.name]: e.target.value,
    });
  };

  const { nombre, apellido, dni, fecha, hora, sintomas } = paciente;

  const _submit = (e) => {
    e.preventDefault();

    if (
      nombre.trim() === "" ||
      apellido.trim() === "" ||
      dni.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      setError(true);
      return;
    }
    setError(false);
    paciente.id = uuid();
    getPacientes(paciente);
    setPaciente({
      nombre: "",
      apellido: "",
      dni: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <Fragment>
      <h2>Crear Recordatorio</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}

      <form onSubmit={_submit}>
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          className="u-full-width"
          placeholder="Ingrese el nombre del paciente"
          onChange={_actualizarPaciente}
          value={nombre}
        />
        <label>Apellido</label>
        <input
          type="text"
          name="apellido"
          className="u-full-width"
          placeholder="Ingresa  el apellido del paciente"
          onChange={_actualizarPaciente}
          value={apellido}
        />
        <label>DNI</label>
        <input
          type="text"
          name="dni"
          className="u-full-width"
          placeholder="Ingresa el dni del paciente"
          onChange={_actualizarPaciente}
          value={dni}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={_actualizarPaciente}
          value={fecha}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={_actualizarPaciente}
          value={hora}
        />
        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={_actualizarPaciente}
          value={sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar
        </button>
      </form>
    </Fragment>
  );
};
export default Formulario;
