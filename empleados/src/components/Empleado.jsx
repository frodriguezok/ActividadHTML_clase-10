import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Fragment } from "react";
import { Badge, Button, Card, CardGroup, Row, Col } from "react-bootstrap";


const Empleado = ({empleado, borrarEmpleado}) => {

   return (
        <Fragment>
        <CardGroup>
            <div className="d-flex justify-content-around">     
                <Card
                    bg="light" 
                    style={{ width: '18rem' }}
                    text="dark"
                    border="dark"
                >
                    <Card.Body>
                    <Card.Title className="justify-content-around">{empleado.nombre}</Card.Title>
                    <Card.Text>
                        <p><strong>Id:</strong> {empleado.id}</p>
                        <p><strong>DNI:</strong> {empleado.dni}</p> 
                        <p><strong>Edad:</strong> {empleado.edad}</p>
                        <p><strong>Nacionalidad:</strong> {empleado.nacionalidad}</p>
                        <p><strong>Su cargo:</strong> {empleado.cargo}</p>
                    </Card.Text>
                    <Button  variant="dark" onClick={()=> borrarEmpleado(empleado.id)}>Borrar empleado</Button>{' '}
                    </Card.Body>
                </Card>
            </div>
        </CardGroup>

        </Fragment>
    );
}



export default Empleado;