import React from 'react';
import './Header.css';
import carrinho from './carrinho.svg';

function Marca() {
  return (
    <div className="container">
      <img src ={carrinho} className = 'logo' alt="logo carrinho"></img>
      <h1 className = 'title'>E-commerce daOra</h1>
      <form>
        <label> User: </label>
        <input type = "text"></input>
        <label> Password: </label>
        <input type = "text"></input>
        <button type ="submit">Login</button>
        </form>     
    </div>
  );
}

export default Marca;
