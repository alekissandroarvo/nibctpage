import Menu from "../menu/Menu";
import NavBar from "../navbar/NavBar";
import React from "react";
import "./senib.css";


export default function Senib() {
  return (
    <div>
      <NavBar />
      <Menu />
      <center>
        <h2>Matéria atual</h2>        
        <p>Andando com Deus</p>
      </center>
      <center>
        <h2>Matérias Anteriores</h2>
        <li>Princípios de Vida 1</li>
        <li>Coração de Discípulo</li>
        <li>Escatologia</li>        
      </center>
    </div>
  );
}
