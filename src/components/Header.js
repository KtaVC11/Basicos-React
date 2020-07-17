import React, { Component } from 'react';

//class component, lleva el component en el import o extend React.Component
//render es obligatorio en los componentes
//en los functional component no puedde usar res que es para leer de un formulario
//no se puede usar el state
//tampoco se puede usar el ciclo de vida, entonces si no se necesita eso se usa un functional component

/*
class Header extends Component {
    render() {
        return (
            <h1>Nombre del Sitio</h1>
        )
    }
}*/


// const Header = () => {

//     return (
//         <h1>Nombre del Sitio</h1>
//     )

// }

//este es stateless
//como es statless hay que pasarle props como parametros y llamarlo con props.

const Header = (props) => {
    //const titulo = 'Nuestra Tienda Virtual';
    return (
        <header>
            <h1>{props.titulo}</h1>
        </header>
    )
}


export default Header;