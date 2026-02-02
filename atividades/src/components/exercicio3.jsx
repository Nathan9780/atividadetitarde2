import React from "react";

function exercicio3() {
  function mostrarInsumo() {
    let insumo = {
      nome: "Adubo orgânico",
      foto: "https://placecats.com/300/200",
      estoque: "150 sacos",
    };

    let titulo = document.getElementById("nome-insumo");
    let imagem = document.getElementById("foto-insumo");

    titulo.innerText = insumo.nome;
    imagem.src = insumo.foto;
  }
  return (
    <div
      style={{ padding: "20px", border: "2px solid #ccc", marginTop: "10px" }}
    >
      <h2>Resultado Estoque</h2>
      <button onClick={mostrarInsumo}>Mostrar Insumo </button>
      <div id="nome-insumo" class="foto-insumo"></div>
    </div>
  );
}

export default exercicio3;
