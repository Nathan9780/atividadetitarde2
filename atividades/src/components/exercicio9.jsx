import React from "react";

function Exercicio9() {
  function verificarEstoque() {
    let item = {
      nome: "Produto A",
      quantidade: 10,
    };
    let caixa = document.getElementById("estoque-status");

    if (item.quantidade > 0) {
      caixa.innerText = `Quantidade disponível: ${item.quantidade} unidades`;
      caixa.style.color = "green";
    } else {
      caixa.innerText = `Produto indisponível`;
      caixa.style.color = "red";
    }
  }
  return (
    <div
      style={{ padding: "20px", border: "1px solid #CCC", marginTop: "20px" }}
    >
      <h2>Relatório</h2>
      <button onClick={verificarEstoque} className="buttons">
        Conferir Estoque
      </button>
      <div
        id="estoque-status"
        style={{ marginTop: "20px", fontWeight: "bold" }}
      ></div>
    </div>
  );
}

export default Exercicio9;
