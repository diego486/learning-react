import React from 'react';
import '../css/App.css';
import ProductSummary from '../components/ProductSummary'

function App() {
  
  return (
    <div className="App">

      <ProductSummary />

      <h3>RoadMap</h3>
      <ol>
        <li>Criar uma estrutura de dados em json para os produtos</li>
        <li>criar um componente (e rota) para exibir o detalhe de um produto</li>
        <li>Criar um componente para o carrinho</li>
        <li>Criar uma section com detalhe da compra, com produtos, preço e total da compra</li>
      </ol>
    </div>
  );
}

export default App;
