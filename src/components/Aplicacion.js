import React, { Component } from 'react';
import Header from './Header';
import Productos from './Productos'
import Footer from './Footer';

//componentes es con class
//class PrimerComponente extends React.Component, se puede utilizar el destructuring que es acceder a algo
//en este caso es acceder a Component, se pone {Component} en el import
//el return de multiples cosas se ponen ()
//los props se declaran en la clase principal, osea esta, la que tiene acceso a todos los componentes
//los props van del padre al hijo
//los props se comunican con los distintos componentes
//titulo en header es un prop
//desde esta clase se pasan los props a los hijos
//los state van en la aplicacion principal, los state saben que cambio se hace y lo refleja
//componentDidMount es parte del ciclo de vida de react




class Aplicacion extends React.Component {

    state = {
        productos: []
    };
    componentDidMount() {
        //console.log('YAAAA');
        this.setState({
            productos: [
                { nombre: 'Libro', precio: 200 },
                { nombre: 'Disco de musica', precio: 100 },
                { nombre: 'Instrumento musical', precio: 800 },
                { nombre: 'Reproductor de musica', precio: 1500 },
                { nombre: 'Album Ed.Especial', precio: 500 }
            ]
        })
    }
    //aqui se construye el state
    //constructor(props) {
    // super();
    /* state = {
         productos: [
             { nombre: 'Libro', precio: 200 },
             { nombre: 'Disco de musica', precio: 100 },
             { nombre: 'Instrumento musical', precio: 800 },
             { nombre: 'Reproductor de musica', precio: 1500 },
             { nombre: 'Album Ed.Especial', precio: 500 }
         ]
     };*/


    render() {

        return (
            <div>

                <Header
                    titulo='Nuestra Tienda Virtual'
                />
                <Productos
                    productos={this.state.productos}
                />
                <Footer />
            </div>
        )
    }
}



export default Aplicacion;