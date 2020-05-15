import React, { Component } from 'react';
import '../css/Header.css';
import carrinho from '../img/carrinho.svg';


class Botao extends Component {
  render() {
    return (
      <button type="submit">Login</button>
    )
  }
}

class CamposFormulario extends Component {
  render(){
    return (  
      <form className = "formulario">
      <label> User: </label>
      <input type="text"></input>
      <label> Password: </label>
      <input type="text"></input>
      </form>
    )
  }
}

const LoginForm = () => {
  return ( 
    <div >
      <CamposFormulario/>
      <Botao/>
      </div>
  );
}

const Marca = () => {
  return(
    <div>
    <img src= {carrinho} alt=""/>
    <h1>E-commerce DaOra</h1>
    </div>
  );
}

class Header extends Component {

  render (){

    return(
      <div class = "wrapper">
      <Marca/>
      <LoginForm/>
      </div>
    );
  }
}

export default Header ;
