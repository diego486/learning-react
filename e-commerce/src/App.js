import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductSummary from './ProductSummary'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ProductSummary />

      <h3>RoadMap</h3>
      <ol>
        <li>Criar uma estrutura de dados em json para os produtos</li>
        <li>criar um componente (e rota) para exibir o detalhe de um produto</li>
        <li>Criar um componente para o carrinho</li>
        <li></li>
      </ol>
    </div>
  );
}

export default App;
