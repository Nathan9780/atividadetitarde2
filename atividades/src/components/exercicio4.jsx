import React from "react";

function Exercicio4() {
  function DestacarAtraso() {
    let caixa = document.getElementById("alerta-cobranca");
    caixa.style.color = "red";
    caixa.innerText = "Pagamento Atrasado!";
    caixa.style.fontWeight = "bold";
  }

  return (
    <div>
      <h2>Cobrança</h2>
      <div
        id="alerta-cobranca"
        style={{ padding: "20px", border: "2px solid #ccc", marginTop: "10px" }}
      >
        Status: Normal
      </div>
      <button onClick={DestacarAtraso}>Destacar Atraso</button>
    </div>
  );
}

export default Exercicio4;
