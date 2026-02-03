import React from "react";

function Exercicio6() {
  function calculartotal() {
    let produtos = [{ nome: "Produto A", preco: 100.5 }];
    let resultado = document.getElementById("total-produtos");
    let total = produtos.preco + produtos.imposto;
    resultado.innerText = `Total: R$ ${total.toFixed(2)}`;
  }

  return (
    <div style={{ padding: "20", border: "2px solid #ccc", marginTop: "10px" }}>
      <h2>Calculadora de Total de Produtos</h2>
      <button onClick={calculartotal}>Calcular Total</button>
      <div
        id="total-produtos"
        style={{ margintop: "10px", fontWeight: "bold" }}
      ></div>
    </div>
  );
}

export default Exercicio6;
