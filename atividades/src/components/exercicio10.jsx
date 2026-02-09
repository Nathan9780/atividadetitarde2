import React from "react";

function Exercicio10() {
  function realizarCotacao() {
    let valorDigitado = document.getElementById("input-preco").value;

    let cotacao = {
      fornecedor: "AgroTop Distribuidora",
      valorSugerido: valorDigitado,
      status: "Cotação em análise",
    };

    document.getElementById("res-fornecedor").innerHTML =
      "Fornecedor:" + cotacao.fornecedor;
    document.getElementById("res-valor").innerHTML =
      "Preço Cotado: R$ " + cotacao.valorSugerido;
    document.getElementById("res-status").innerText = cotacao.status;
  }

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #2e7d32",
        marginTop: "10px",
      }}
    >
      <h2>Cotação e Compras</h2>
      <input
        id="input-preco"
        type="number"
        placeholder="Digite o valor da cotação"
      />
      <button onClick={realizarCotacao} className="buttons">
        Registrar Cotação
      </button>

      <div
        style={{
          marginTop: "15px",
          backgroundColor: " #eee ",
          padding: "10px",
        }}
      >
        <p id="res-fornecedor"></p>
        <p id="res-valor"></p>
        <p id="res-status" style={{ fontWeight: "bold", color: "orange" }}></p>
      </div>
    </div>
  );
}

export default Exercicio10;
