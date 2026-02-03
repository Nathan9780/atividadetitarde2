import React from "react";

function Exercicio5() {
  function saudarCliente() {
    let nomeDigitado = document.getElementById("nome-cliente").value;
    let mensagem = document.getElementById("mensagem-saudacao");
    mensagem.innerText = `Seja bem-vindo, ${nomeDigitado}!`;
  }

  return (
    <div>
      <h2>Saudação ao Cliente</h2>
      <input type="text" id="nome-cliente" placeholder="digite seu nome" />
      <button onClick={saudarCliente}>Saudar</button>
      <p id="mensagem-saudacao" style={{ marginTop: "10px" }}></p>
    </div>
  );
}

export default Exercicio5;
