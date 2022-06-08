import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {Fragment, useState} from 'react';
import { Container, Row, Col, Form} from 'react-bootstrap';
import Formulario from './components/Formulario';
import Empleado from './components/Empleado';

function App() {

  const [personal, editarPersonal] = useState([]);

  const agregarEmpleado = (empleado) => {
    editarPersonal([
      ...personal,
      empleado
    ])
  };

  const borrarEmpleado = (id) => {
    const nuevaListaEmpleados = personal.filter(empleado => empleado.id !== id);
    editarPersonal(nuevaListaEmpleados);
  }

  return (
    <Fragment>
      <Container>
        <Row>
          <Col>Mis empleados</Col>
        </Row>
        <Row>
          <Col>
            Formulario de mis empleados
            <Formulario agregarEmpleado={agregarEmpleado}/>
          </Col>

          <Col>
            Listado de empleados
            {
              personal.map(
                empleado => 
                  <Empleado
                    empleado={empleado}
                    key={empleado.id}
                    borrarEmpleado = {borrarEmpleado}
                  />
              )
            }
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
