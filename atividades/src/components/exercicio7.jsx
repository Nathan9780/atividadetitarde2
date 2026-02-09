import React from "react";
import Exercicio1 from "./exercicio1";

function Exercicio7() {
  function mostrarPrimeiraEntrega() {
    let entregas = [
      "Fazenda primavera",
      "Fazenda Solnascente",
      "Fazenda Boa Vista",
    ];
    let campo = document.getElementById("primeira-entrega");
    campo.innerText = `Primeira entrega: ${entregas[0]}`;
  }
  return (
    <div style={{ padding: "20", border: "1px solid #ccc", marginTop: "10px" }}>
      <h2>Lista Entregas</h2>
      <button onClick={mostrarPrimeiraEntrega} className="buttons">
        Mostrar Primeira Entrega
      </button>
      <div
        id="primeira-entrega"
        style={{ marginTop: "10px", fontWeight: "bold" }}
      ></div>
    </div>
  );
}

export default Exercicio7;
