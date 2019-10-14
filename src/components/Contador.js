import React, { Component } from 'react';
import {Container, Button, Badge} from 'reactstrap';
import '../styles/Contador.css'
class Contador extends Component{
    state = {
        titulo:this.props.titulo,
        contador:this.props.numero,
    }
    incrementar =() =>{
        this.setState({
            contador: this.state.contador +1
        });
    }
    disminuir =() =>{
        this.setState({
            contador: this.state.contador -1
        });
    }

    render(){
        return(
            <Container className='mt-4 contador-div'>
            <h1>{this.state.titulo}</h1>
            <div className='d-flex align-items-center'>
            <Badge className='contador-margin'>
                <span className= 'contador-num'>{this.state.contador}</span>
            </Badge>
            <Button onClick={this.incrementar} color='primary'
            className='contador-margin'>+</Button>
            <Button onClick={this.disminuir} className='contador-margin' color='danger'>-</Button>
            <Button color='warning'>Eliminar</Button>
            </div>
            </Container>
        );
    }
}

export default Contador;