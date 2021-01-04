import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Paciente from "./components/Paciente";

function App() {
  let pacientesIniciales = JSON.parse(localStorage.getItem("pacientes"));
  if (!pacientesIniciales) {
    pacientesIniciales = [];
  }
  const [pacientes, setPacientes] = useState(pacientesIniciales);

  useEffect(() => {
    let pacientesIniciales = JSON.parse(localStorage.getItem("pacientes"));
    if (pacientesIniciales) {
      localStorage.setItem("pacientes", JSON.stringify(pacientes));
    } else {
      localStorage.setItem("pacientes", JSON.stringify([]));
    }
  }, [pacientes]);

  const getPacientes = (paciente) => {
    setPacientes([...pacientes, paciente]);
  };

  const _eliminarPaciente = (id) => {
    const eliminar = pacientes.filter((paciente) => paciente.id !== id);
    setPacientes(eliminar);
  };

  const titulo =
    pacientes.length === 0 ? "No hay pacientes" : "Administra tus pacientes";

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario getPacientes={getPacientes} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {pacientes.map((paciente) => (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                eliminarPaciente={_eliminarPaciente}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
