import React, { Component } from 'react'
import foto from './ferias-novo-normal.jpg'

export default class ProductSummary extends Component {
  render() {
    return (
      <div className="looks-like-glass"> {/* tudo que eu fiz foi o que está entre essa ... */}
        <h2>Isso é que é produto</h2>
        <img src={foto} alt="foto do produto"/>
        <p className="prod-descr">Descrição do produto</p>
        <p className="pricetag">R$ Muitos</p>
      </div> /* e essa linha */
    )
  }
}
