import React from "react";
import { Fragment, useState } from "react";
import {Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({agregarEmpleado}) => {

    const [empleado, editarEmpleado] = useState({
        nombre: "",
        edad: "",
        dni: "",
        nacionalidad: "",
        cargo: ""

    }) ;

    const [error, setError] = useState(false);

    const {nombre,edad,dni,nacionalidad,cargo} = empleado;

    const handleChange = (e) => {
        editarEmpleado({
            ...empleado,
            [e.target.name]: e.target.value,
        });
    }

    const submitForm = (e) => {
        e.preventDefault();

        if(nombre.trim()===''|| dni.trim() === '' || edad.trim() === '' || nacionalidad.trim() === '' || cargo.trim() === '') {
            setError(true);
            return;
        }

        setError(false);

        empleado.id = uuidv4();

        agregarEmpleado(empleado);
      
        editarEmpleado({
            nombre: "",
            edad: "",
            dni: "",
            nacionalidad: "",
            cargo: ""
        });

    };


    return (
        <Fragment>
            <Form onSubmit={submitForm}>
            <Form.Group>
                <Form.Label>Nombre y apellido</Form.Label>
                <Form.Control
                    type="text" 
                    placeholder="Nombre completo del empleado"
                    name="nombre" 
                    onChange={handleChange}
                    value={nombre}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Edad</Form.Label>
                <Form.Control
                    type="number" 
                    placeholder="Edad del empleado"
                    name="edad"
                    onChange={handleChange}
                    value={edad}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>DNI</Form.Label>
                <Form.Control
                    type="text" 
                    placeholder="DNI del empleado"
                    name="dni"
                    onChange={handleChange}
                    value={dni}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Nacionalidad</Form.Label>
                <Form.Control
                    type="text" 
                    placeholder="Nacionalidad del empleado"
                    name="nacionalidad"
                    onChange={handleChange}
                    value={nacionalidad}
                />

            </Form.Group>

            <Form.Group>
                <Form.Label>Cargo</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Cargo a ocupar en la empresa"
                    name="cargo"
                    onChange={handleChange}
                    value={cargo}
                />
        
            </Form.Group>

            <Button variant="primary" type="submit">
                Agregar empleado
            </Button>
            </Form>
            {
                 error ? <h4>Debe completar todos los campos para agregar un empleado</h4> : null
            }
        </Fragment>
    )
}

export default Formulario;