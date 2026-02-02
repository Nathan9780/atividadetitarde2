import React from "react";

function Exercicio2() {
  function processarDados() {
    //simulação de json
    let fatura = {
      cliente: "João Silva",
      valor: 250.75,
      vencimento: "2024-07-15",
    };

    let display = document.getElementById("detalhes-fatura");
    display.innerHTML =
      "cliente: " +
      fatura.cliente +
      "<br>" +
      "valor: R$ " +
      fatura.valor +
      "<br>" +
      "Vencimento" +
      fatura.vencimento;
  }
  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Processamento de Fatura</h2>
      <button onClick={processarDados}>Processar Dados</button>
      <div
        id="detalhes-fatura"
        style={{ marginTop: "10px", fontWeight: "bold" }}
      >
        Resultado Financeiro
      </div>
    </div>
  );
}

export default Exercicio2;
