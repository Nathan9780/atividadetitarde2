import React from "react";

function Exercicio8() {
  function verLocal() {
    let analise = {
      id: 1,
      propriedade: { nome: "Terra Boa", cidade: "muriaé", estado: "MG" },
    };
    let info = document.getElementById("info-local");
    info.innerHTML = `O local é ${analise.propriedade.nome}, localizado na cidade de ${analise.propriedade.cidade} no estado de ${analise.propriedade.estado}`;
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <h2>Relatório</h2>
        <button onClick={verLocal} className="buttons">
          Ver Local
        </button>
        <div
          id="info-local"
          style={{ marginTop: "20px", fontSize: "10px", fontWeight: "bold" }}
        ></div>
      </div>
    </div>
  );
}

export default Exercicio8;
