import React, { Component } from 'react';


//componentes es con class
//class PrimerComponente extends React.Component, se puede utilizar el destructuring que es acceder a algo
//en este caso es acceder a Component, se pone {Component} en el import
//el return de multiples cosas se ponen ()
//al ser un class component no necesita pasar props como parametro
//{console.log(this.props)}

class Producto extends Component {
    render() {
        const { nombre, precio } = this.props.producto
        return (
            <div>
                <h2>{nombre}</h2>
                <p>Precio: ${precio}</p>

            </div>
        )
    }
}



export default Producto;