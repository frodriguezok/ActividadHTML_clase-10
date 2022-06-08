import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {Fragment, useState} from 'react';
import { Container, Row, Col, Form} from 'react-bootstrap';
import Formulario from './components/Formulario';
import Empleado from './components/Empleado';
import 'bootstrap/dist/css/bootstrap.min.css';

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
          <Col><h4>Agregar empleado</h4></Col>
        </Row>
        <Row>
          <Col>
            <h5>Formulario de ingreso</h5>
            <Formulario agregarEmpleado={agregarEmpleado}/>
          </Col>

          <Col>
            <h4>Listado de empleados</h4>
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
