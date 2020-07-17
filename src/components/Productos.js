import React, { Component } from 'react';
import Producto from './Producto';


//componentes es con class
//class PrimerComponente extends React.Component, se puede utilizar el destructuring que es acceder a algo
//en este caso es acceder a Component, se pone {Component} en el import
//el return de multiples cosas se ponen ()
//al ser un class component no necesita pasar props como parametro
//{console.log(this.props.productos)}
//object keys regresa el objeto,se usa {}

class Productos extends Component {
    render() {
        return (
            <div>
                <h2>Listado de productos</h2>
                {Object.keys(this.props.productos).map(key => (
                    <Producto
                        key={key}
                        producto={this.props.productos[key]}
                    />
                    //console.log(key);//aqui accede a todos
                    //console.log(this.props.productos[key]) //aqui accede de manera individual
                ))}

            </div>
        )
    }
}



export default Productos;