import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Fragment } from "react";
import { Badge, Button } from "react-bootstrap";

const Empleado = ({empleado, borrarEmpleado}) => {
    return (
        <Fragment>
            <Badge bg="success" >
                <p>Empleado: {empleado.id}</p>
                <p>Nombre: {empleado.nombre}</p>
                <p>DNI: {empleado.dni}</p> 
                <p>Edad: {empleado.edad}</p>
                <p>Nacionalidad: {empleado.nacionalidad}</p>
                <p>Su cargo: {empleado.cargo}</p>
                <Button variant="dark" onClick={()=> borrarEmpleado(empleado.id)}>Borrar empleado</Button>{' '}
            </Badge>  

        </Fragment>
    );
}

export default Empleado;